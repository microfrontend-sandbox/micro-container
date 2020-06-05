import { ThunkAction, Action, EnhancedStore } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface InjectableStore extends EnhancedStore {
  injectReducer: { (key: string, reducer: Reducer<any, any>): void };
}

export interface ReducerMap {
  [key: string]: Reducer<any, any>;
}

export type AppThunk = ThunkAction<void, any, unknown, Action<string>>;