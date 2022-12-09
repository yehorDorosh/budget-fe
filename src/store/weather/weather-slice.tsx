import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SensorType, WeatherDataType } from '../../types';

export type WeatherStateT = {
  [key in SensorType]: WeatherDataType;
};

const defaultWeatherData: WeatherDataType = {
  id: 'N/A',
  reg_date: 'N/A',
  t: 0,
  p: 0,
  v: 0,
};

const initialState: WeatherStateT = {
  [SensorType.floor1]: defaultWeatherData,
  [SensorType.floor2]: defaultWeatherData,
  [SensorType.outside]: defaultWeatherData,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(
      state,
      action: PayloadAction<{ id: keyof WeatherStateT; weather: WeatherDataType }>
    ) {
      state[action.payload.id] = action.payload.weather;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
