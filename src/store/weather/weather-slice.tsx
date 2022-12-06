import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { weatherData } from '../../types';

interface weatherState {
  weatherData: weatherData[];
}

const initialState: weatherState = {
  weatherData: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(state, action: PayloadAction<weatherData[]>) {
      state.weatherData = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
