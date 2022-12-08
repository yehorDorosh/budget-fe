import {configureStore, createSlice} from '@reduxjs/toolkit';
import weatherSlice from './weather/weather-slice';
import navigationSlice from './navigation/navigation-slice';

interface rootState {
  host: string;
};

const initialState: rootState = {
  host: 'http://35.178.207.100'
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
    weather: weatherSlice,
    navigation: navigationSlice,
  },
});

export const rootActions = rootSlice.actions;

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
