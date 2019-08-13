import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from './navigator';

const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(routerMiddleware, thunk));
  const persistor = persistStore(store);
  return {
    persistor,
    store,
  };
};

export default ConfigureStore;
