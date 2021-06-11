import productApi from 'api/productApi';
import Header from 'components/Header';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

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

    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading....</div>}>
                <Router>
                    <Header />

                    <Switch>
                        <Redirect exact from="/" to="/photos" />
                        <Route path="/photos" component={Photo} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
