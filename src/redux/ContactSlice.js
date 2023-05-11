import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const directory = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactSlice = createSlice({
  name: 'contacts',

  initialState: {
    directory,
  },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.directory.push(action.payload);
      },
      prepare: payload => ({ payload }),
    },

    removeContact: {
      reducer: (state, action) => {
        state.directory = state.directory.filter(
          contact => contact.id !== action.payload
        );
      },
      prepare: payload => ({ payload }),
    },
  },
});

export const contactsReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);

export const { addContact, removeContact } = ContactSlice.actions;
