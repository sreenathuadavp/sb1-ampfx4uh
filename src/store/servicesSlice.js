import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      id: 1,
      name: 'Plumbing Service',
      description: 'Professional plumbing services in Chittoor area',
      price: 500,
      category: 'Home Services',
      image: '/images/plumbing.jpg'
    },
    {
      id: 2,
      name: 'Electrical Repair',
      description: 'Expert electrical repair and installation',
      price: 600,
      category: 'Home Services',
      image: '/images/electrical.jpg'
    },
    {
      id: 3,
      name: 'AC Service',
      description: 'AC maintenance and repair services',
      price: 800,
      category: 'Home Services',
      image: '/images/ac-service.jpg'
    }
  ],
  loading: false,
  error: null
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setServices, setLoading, setError } = servicesSlice.actions;
export default servicesSlice.reducer;