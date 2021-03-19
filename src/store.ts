import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
  ),
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
