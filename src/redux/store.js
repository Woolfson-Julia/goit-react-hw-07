import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
// Один раз на додаток створити store та редюсер

// Оголосити компонент(и)
// Підписати компонент(и) на дані в store через useSelector
// Оголосити екшен за допомогою createAction
// Відправити екшен із компонента через useDispatch
// Обробити екшен в редюсері

