import { v4 as uuidv4 } from 'uuid';
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {
        id: uuidv4(),
        title: "This is pic 1",
        categoryId: 1,
        photo: "https://picsum.photos/id/308/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 2",
        categoryId: 2,
        photo: "https://picsum.photos/id/337/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 3",
        categoryId: 2,
        photo: "https://picsum.photos/id/318/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 4",
        categoryId: 1,
        photo: "https://picsum.photos/id/992/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 5",
        categoryId: 3,
        photo: "https://picsum.photos/id/1079/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 6",
        categoryId: 3,
        photo: "https://picsum.photos/id/654/300/300"
    },
    {
        id: uuidv4(),
        title: "This is pic 7",
        categoryId: 1,
        photo: "https://picsum.photos/id/156/300/300"
    },
]

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const photoIdx = state.findIndex(o => o.id === action.payload);
            if(photoIdx >= 0){
                state.splice(photoIdx, 1);    
            }            
        },
        updatePhoto: (state, action) => {
            const photo = action.payload;
            const photoIdx = state.findIndex(o => o.id === photo.id);
            if(photoIdx >= 0){
                state[photoIdx] = photo;
            }
        }
    }
});

const {actions, reducer} = photoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
