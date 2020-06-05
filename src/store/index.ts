import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from '../utils/historyUtils';
import { Reducer } from 'react';
import { InjectableStore, ReducerMap } from '../types/Store';

const reducers: ReducerMap = {};

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const store = configureStore({
  reducer: {},
  middleware
}) as InjectableStore;

store.injectReducer = (key: string, reducer: Reducer<any, any>) => {
  reducers[key] = reducer
  store.replaceReducer(combineReducers(reducers));
};

store.injectReducer('router', connectRouter(history));

export default store;