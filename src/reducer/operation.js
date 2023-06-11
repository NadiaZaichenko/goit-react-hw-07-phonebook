import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'services/api';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const contactsItems = await api.fetchContacts();
      return contactsItems;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, phone: number}, thunkAPI) => {
    try {
      const addNewContact = await api.addContact({name, phone: number});
      return addNewContact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await api.deleteContact(id);
      return contactToDelete;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);