const { configureStore } = require("@reduxjs/toolkit");
const { default: reducer } = require("features/Photo/photoSlice");

const rootReducer = {
    photo: reducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;