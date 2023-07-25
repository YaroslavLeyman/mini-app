import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routeSaga } from './sagas/routeSaga';
import routeReducer from './reducers/routeSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    route: routeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(routeSaga);

export default store;
