import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://66f01b3af2a8bce81be50a33.mockapi.io"

export const fetchContacts = createAsyncThunk ('contacts/fetchAll', async(_, thunkAPI) => {
try {
    const res = await axios.get('/contacts');
return res.data
} catch (error) {
   return thunkAPI.rejectWithValue(error.message)
}
})

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const res = await axios.post('/contacts', contact);
        return res.data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );