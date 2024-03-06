import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCar = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://65e847d54bb72f0a9c4ed2ee.mockapi.io/advert`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

const carsSlice = createSlice({
  name: 'cars',

  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchCar.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const carsReducer = carsSlice.reducer;
