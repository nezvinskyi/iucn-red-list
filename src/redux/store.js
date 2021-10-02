import { configureStore } from '@reduxjs/toolkit';

import speciesReducers from './species';

export const store = configureStore({
  reducer: {
    species: speciesReducers,
  },
});
