import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LinksT } from '../../types';

interface navigationState {
  links: LinksT;
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
