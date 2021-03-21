import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
  ),
);

export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof rootReducer>;
