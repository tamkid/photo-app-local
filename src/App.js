import productApi from 'api/productApi';
import Header from 'components/Header';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
    const [productList, setProductList] = useState([]);

    // Test api
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const params = {
                    _limit: 10,
                    _page: 1
                };
                const response = await productApi.getAll(params);
                console.log(response);

                setProductList(response.data);
            } catch (error) {
                console.log("Fetch Product List Fail", error);
            }
        };

        fetchProductList();
    }, []);

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if(!user){
                //Not login
                console.log("Not login")
                return;
            }

            console.log("Login user: ", user.displayName);
            const token = await user.getIdToken();
            localStorage.setItem('firebaseui::rememberedAccounts', JSON.stringify(user.providerData))
            console.log("Login user token: ", token);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading....</div>}>
                <Router>
                    <Header />
                    
                    <Switch>
                        <Redirect exact from="/" to="/photos" />
                        <Route path="/photos" component={Photo} />
                        <Route path="/signIn" component={SignIn} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
