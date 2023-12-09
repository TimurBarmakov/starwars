// src/redux/store.ts

import { createStore, combineReducers } from 'redux';
import peopleReducer from './reducers/peopleReducer.ts';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage'; // Импортируем утилиты

const rootReducer = combineReducers({
  people: peopleReducer,
  // Добавьте другие редюсеры, если есть
});

const persistedState = getFromLocalStorage('state', {}); // Используем getFromLocalStorage


// Включаем поддержку Redux DevTools
const store = createStore(
  rootReducer,
  persistedState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage('state', store.getState()); // Используем saveToLocalStorage при каждом изменении
});

export default store;
