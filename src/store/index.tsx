import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/weather-slice';
import navigationSlice from './navigation/navigation-slice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    navigation: navigationSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
