import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {SensorType, WeatherDataType} from '../../types';

export type WeatherStateT = {
  [key in SensorType]: Partial<WeatherDataType>;
}

const initialState: WeatherStateT = {
  [SensorType.floor1]: {},
  [SensorType.floor2]: {},
  [SensorType.outside]: {}
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(state, action: PayloadAction<{ id: keyof WeatherStateT, weather: WeatherDataType}>) {
      state[action.payload.id] = action.payload.weather;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
