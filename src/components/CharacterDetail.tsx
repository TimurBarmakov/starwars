import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types.ts';
import { Link } from 'react-router-dom';
import './App.css';

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;
}

const CharacterDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const people = useSelector((state: RootState) => state.people.people);

  if (!people || people.length === 0) {
    return (
      <div className="charactersContainer">
        <div className="centeredText">
          <h1>Star Wars Characters</h1>
        </div>
        <p className="loadingText">Loading...</p>
      </div>
    );
  }
  
  const selectedCharacter: Person | undefined = people.find(
    (person: Person) => person.name === name
  );
  
  if (!selectedCharacter) {
    return (
      <div className="charactersContainer">
        <div className="centeredText">
          <h1>Star Wars Characters</h1>
        </div>
        <p className="loadingText">Character not found</p>
      </div>
    );
  }

  return (
    <div className="charactersContainer">
      <div className="centeredText">
        <h1>Star Wars Characters</h1>
      </div>
      <div className="characterDetailContainer">
        <h2>{selectedCharacter.name}</h2>
        <p>
          <strong>Рост:</strong> {selectedCharacter.height}
        </p>
        <p>
          <strong>Вес:</strong> {selectedCharacter.mass}
        </p>
        <p>
          <strong>Цвет волос:</strong> {selectedCharacter.hair_color}
        </p>
        <p>
          <strong>Цвет глаз:</strong> {selectedCharacter.eye_color}
        </p>
        <p>
          <strong>Цвет кожи:</strong> {selectedCharacter.skin_color}
        </p>
        <p>
          <strong>Год рождения:</strong> {selectedCharacter.birth_year}
        </p>
        <p>
          <strong>Пол:</strong> {selectedCharacter.gender}
        </p>
        <Link to="/" className="backButton">Назад</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;
