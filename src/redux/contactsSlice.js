import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';


const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase((fetchContacts.pending), state => {
        state.loading = true;
        state.error = null;
      })
      .addCase((fetchContacts.fulfilled), (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase((fetchContacts.rejected), state => {
        state.loading = false;
        state.error = true;
        toast.error("Please reload there was an error!!!!");
      })
      .addCase((addContact.pending), state => {
        state.loading = true;
        state.error = null;
      })
      .addCase((addContact.fulfilled), (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase((addContact.rejected), state => {
        state.loading = false;
        state.error = true;
        toast.error("Please reload there was an error!!!!");
      })
      .addCase((deleteContact.pending), state => {
        state.loading = true;
        state.error = null;        
      })
      .addCase((deleteContact.fulfilled), (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      })
      .addCase((deleteContact.rejected), state => {
        state.loading = false;
        state.error = true;
        toast.error("Please reload there was an error!!!!");
      })
  }
})

export default slice.reducer;


