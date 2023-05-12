import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import  authReducer  from '../features/auth/authSlice';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// const isProduction = process.env.NODE_ENV === 'production';
export const history = createBrowserHistory()
const middleware = [thunk, routerMiddleware(history)];

const store = configureStore({
  reducer: {
    auth: authReducer,
    router: connectRouter(history),
  },
  middleware: middleware,
  devTools: true,
});

export default store;