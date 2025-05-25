import counterReducer from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;