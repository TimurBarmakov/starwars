// ...
import { SET_PEOPLE , SET_CURRENT_PAGE } from '../actions/actionTypes.ts';
import { SetPeopleAction, SetCurrentPageAction } from '../actions/peopleActions.ts';
import { Character } from '../../types/types.ts';
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/localStorage';

interface PeopleState {
  people: Character[] | undefined;
  currentPage: number;
}

const localStorageKey = 'starWarsApp';

const initialState: PeopleState = {
  people: undefined,
  currentPage: getFromLocalStorage(`${localStorageKey}_currentPage`, 1),
};


type Action = SetPeopleAction | SetCurrentPageAction;

const peopleReducer = (state = initialState, action: Action): PeopleState => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
      case SET_CURRENT_PAGE:
      const newState = {
        ...state,
        currentPage: action.payload,
      };
      saveToLocalStorage(`${localStorageKey}_currentPage`, newState.currentPage);
      return newState;
    default:
      return state;
  }
};

export default peopleReducer;
