import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';


const persistedContactsReducer = persistReducer(
  {
    key: 'app_contact',
    storage,
    whitelist: ['items'],
  },
  contactsReducer
);


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
// Один раз на додаток створити store та редюсер

// Оголосити компонент(и)
// Підписати компонент(и) на дані в store через useSelector
// Оголосити екшен за допомогою createAction
// Відправити екшен із компонента через useDispatch
// Обробити екшен в редюсері

