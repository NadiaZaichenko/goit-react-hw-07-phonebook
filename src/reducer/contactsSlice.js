import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    items : [],
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
           reducer(state, action) {
            state.items.push(action.payload);
           } ,
           prepare(contact) {
            return { 
                payload: {
                   ...contact,
                   id: nanoid(),
                },
             };
           },
        },
        deleteContact(state, action) {
           state.items = state.items.filter(item => item.id !== action.payload.id);
        },
}})

const persistConfig ={
    key: 'contacts',
    storage,
}
export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer );

export const {addContact, deleteContact} = contactsSlice.actions;
    
export const getContactsItems = state => state.contacts.items;