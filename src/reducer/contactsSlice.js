import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operation";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
  };

const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
}  
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
const initialState = {
    items: [],
    isLoading: false,
    error: null,
  }
  const contactSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
    })
    .addMatcher(isAnyOf(...getActions('fulfilled')),handleFulfilled)
    .addMatcher(isAnyOf(...getActions('pending')), handlePending)
    .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
    //   [fetchContacts.pending]: handlePending,
    //   [fetchContacts.fulfilled](state, action) {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   },
    //   [fetchContacts.rejected]: handleRejected,
    //   [addContact.pending]: handlePending,
    //   [addContact.fulfilled](state, action) {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   },
    //   [addContact.rejected]: handleRejected,
    //   [deleteContact.pending]: handlePending,
    //   [deleteContact.fulfilled](state, action) {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(task => task.id === action.payload);
    //     state.items.splice(index, 1);
    //   },
    //   [deleteContact.rejected]: handleRejected
    // },
  });

  const extraActions = [fetchContacts, addContact, deleteContact];

  const getActions = type => extraActions.map(action => action[type]);

  export const contactsReducer = contactSlice.reducer;
  
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     items : [],
// };

// export const contactsSlice = createSlice({
//     name: "contacts",
//     initialState,
//     reducers: {
//         addContact: {
//            reducer(state, action) {
//             state.items.push(action.payload);
//            } ,
//            prepare(contact) {
//             return { 
//                 payload: {
//                    ...contact,
//                    id: nanoid(),
//                 },
//              };
//            },
//         },
//         deleteContact(state, action) {
//            state.items = state.items.filter(item => item.id !== action.payload.id);
//         },
// }})

// const persistConfig ={
//     key: 'contacts',
//     storage,
// }
// export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer );

// export const {addContact, deleteContact} = contactsSlice.actions;
    
