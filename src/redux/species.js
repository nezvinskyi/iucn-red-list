import { createSlice } from '@reduxjs/toolkit';

export const speciesSlice = createSlice({
  name: 'species',
  initialState: {
    region: null,
  },
  reducers: {
    selectRegion: (state, { payload }) => ({
      ...state,
      region: payload,
    }),
  },
});

export const { selectRegion } = speciesSlice.actions;

export const regionSelector = state => state.species.region;

export default speciesSlice.reducer;
