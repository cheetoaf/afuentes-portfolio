import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;