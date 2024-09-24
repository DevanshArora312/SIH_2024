import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './slices/user';
import blockChainReducer from './slices/blockChain';
import authReducer from './slices/auth';

const rootPersistConfig = {
  key: 'root',
  storage : AsyncStorage,
  keyPrefix: 'redux-',
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  user : userReducer,
  auth: authReducer,
  blockChain : blockChainReducer,
});

export { rootPersistConfig,rootReducer};