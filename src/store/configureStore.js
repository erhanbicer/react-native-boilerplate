import { applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
   key: 'AwasomeProjectApp',
   storage: AsyncStorage,
   whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

let persistor = persistStore(store);

export { store, persistor };
