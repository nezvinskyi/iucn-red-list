import { createSlice, createSelector } from '@reduxjs/toolkit';

export const speciesSlice = createSlice({
  name: 'species',
  initialState: {
    region: {},
    species: [],
    isLoading: false,
  },
  reducers: {
    setRegion: (state, { payload }) => ({
      ...state,
      region: payload,
    }),

    fetchSpecies: (state, { payload }) => ({ ...state, species: payload }),

    toggleLoader: state => ({
      ...state,
      isLoading: !state.isLoading,
    }),
  },
});

export const { setRegion, fetchSpecies, toggleLoader } = speciesSlice.actions;

export const regionSelector = state => state.species.region;

export const allSpeciesSelector = state => state.species.species;

export const criticalSpeciesSelector = createSelector([allSpeciesSelector], species =>
  species.filter(item => item.category === 'CR'),
);

export const mammalsSelector = state =>
  state.species.species.filter(item => item.class_name === 'MAMMALIA');

export const loaderSelector = state => state.species.isLoading;

export default speciesSlice.reducer;
