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
  });

  const extraActions = [fetchContacts, addContact, deleteContact];

  const getActions = type => extraActions.map(action => action[type]);

  export const contactsReducer = contactSlice.reducer;
  
