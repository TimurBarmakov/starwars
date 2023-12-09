import { SET_PEOPLE, SET_CURRENT_PAGE } from './actionTypes.ts';
import { Character } from '../../types/types.ts';

interface SetPeopleAction {
  type: typeof SET_PEOPLE;
  payload: Character[];
}

interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export const setCurrentPage = (page: number): SetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setPeople = (people: Character[]): SetPeopleAction => ({
  type: SET_PEOPLE,
  payload: people,
});

export type { SetPeopleAction, SetCurrentPageAction };
