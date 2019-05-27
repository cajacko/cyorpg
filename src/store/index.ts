import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import reducers from './reducers';

const persistConfig = {
  key: 'cyorpg',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);

  return { store, persistor };
};
