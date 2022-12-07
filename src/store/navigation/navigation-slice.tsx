import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { links as linksType } from '../../types';

interface navigationState {
  links: linksType;
}

const initialState: navigationState = {
  links: [
    { page: 'Budget', label: 'Budget', path: '/budget' },
  ],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {

  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice.reducer;
