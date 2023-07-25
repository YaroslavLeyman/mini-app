import { createSlice } from '@reduxjs/toolkit';

const routeSlice = createSlice({
  name: "route",
  initialState: {
    routes: [
      {
        id: 1,
        name: "Маршрут №1",
        points: [
          { lat: 59.84660399, lng: 30.29496392, name: "Точка 1" },
          { lat: 59.82934196, lng: 30.42423701, name: "Точка 2" },
          { lat: 59.83567701, lng: 30.38064206, name: "Точка 3" },
        ],
      },
      {
        id: 2,
        name: "Маршрут №2",
        points: [
          { lat: 59.82934196, lng: 30.42423701, name: "Точка 1" },
          { lat: 59.82761295, lng: 30.41705607, name: "Точка 2" },
          { lat: 59.84660399, lng: 30.29496392, name: "Точка 3" },
        ],
      },
      {
        id: 3,
        name: "Маршрут №3",
        points: [
          { lat: 59.83567701, lng: 30.38064206, name: "Точка 1" },
          { lat: 59.84660399, lng: 30.29496392, name: "Точка 2" },
          { lat: 59.82761295, lng: 30.41705607, name: "Точка 3" },
        ],
      },
    ],
    selectedRoute: null,
    loading: false,
    error: null,
  },
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
    fetchRouteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRouteSuccess: (state, action) => {
      state.loading = false;
      state.selectedRoute = action.payload;
    },
    fetchRouteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  selectRoute,
  fetchRouteStart,
  fetchRouteSuccess,
  fetchRouteFailure,
} = routeSlice.actions;

export default routeSlice.reducer;
