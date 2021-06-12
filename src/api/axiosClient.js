import queryString from 'query-string';
import firebase from 'firebase';
const { default: axios } = require("axios");

const getFirebaseToken = async () => {
    // signed in already
    const currentUser = firebase.auth().currentUser;
    if(currentUser) return await currentUser.getIdToken();

    // Not signed in
    const isRemember = localStorage.getItem('firebaseui::rememberedAccounts');
    if(!isRemember) return null;

    // Signed in but current user is not fetched --> wait (10s)
    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => {
            console.log("reject timeout");
            reject(null);            
        }, 10000);

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if(!user){
                reject(null);
            }

            const token = await user.getIdToken();
            console.log('[AXIOS] Logged in user token: ', token);
            resolve(token);

            unregisterAuthObserver();
            clearTimeout(waitTimer);
        });
    });
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here
    const token = await getFirebaseToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;