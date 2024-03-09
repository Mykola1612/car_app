import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCar = createAsyncThunk(
  'cars/fetchAll',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://65e847d54bb72f0a9c4ed2ee.mockapi.io/advert?page=${page}&limit=${limit}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

const carsSlice = createSlice({
  name: 'cars',

  initialState: { items: [], isLoading: false, error: null, totalItems: false },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length === 0) {
          state.totalItems = true;
          return;
        }
        const uniquePayload = payload.filter(
          (newItem) =>
            !state.items.some((existingItem) => existingItem.id === newItem.id)
        );
        state.items = [...state.items, ...uniquePayload];
      })
      .addCase(fetchCar.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const carsReducer = carsSlice.reducer;
