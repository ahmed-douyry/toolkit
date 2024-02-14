// UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, nom: 'Bouga', prenom: 'Nabil' },
  { id: 2, nom: 'Koukhou', prenom: 'Badr' },
  { id: 3, nom: 'Jadid', prenom: 'Khadija' }
];

const UserSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const user = state.find(e => e.id === action.payload.id);
      if (user) {
        user.nom = action.payload.nom;
        user.prenom = action.payload.prenom;
      }
    },
    deleteUser: (state, action) => {
      return state.filter(e => e.id !== action.payload.id);
    }
  }
});

export const { addUser, updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
