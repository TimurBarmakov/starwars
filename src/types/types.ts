// types.ts

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  // Добавьте другие свойства персонажа по мере необходимости
}

export interface PeopleState {
  people: Character[];
  currentPage: number; // Добавьте текущую страницу в интерфейс
}

export interface RootState {
  people: PeopleState;
  // Добавьте другие интерфейсы для других частей состояния, если есть
}
