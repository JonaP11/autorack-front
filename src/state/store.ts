import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // https://github.com/rt2zz/redux-persist/issues/988#issuecomment-654875104
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(thunk);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
