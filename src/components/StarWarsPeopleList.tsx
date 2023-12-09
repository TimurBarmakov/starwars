import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeople, SetPeopleAction, setCurrentPage } from '../redux/actions/peopleActions.ts';
import { RootState } from '../types/types.ts';
import { Link } from 'react-router-dom';
import './App.css';

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
}

const StarWarsPeopleList: React.FC = () => {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.people.people);
  const currentPage = useSelector((state: RootState) => state.people.currentPage);
  console.log('Redux State:', people);

  const [isLoadingPage, setIsLoadingPage] = useState<number | null>(null);
  const [peoplePerPage] = useState(5);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoadingPage(currentPage);
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
        const data = await response.json();
        dispatch<SetPeopleAction>(setPeople(data.results));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoadingPage(null);
      }
    };

    fetchPeople();
  }, [dispatch, currentPage]);

  if (!people || people.length === 0) {
    return (
      <div className="charactersContainer">
        <div className="centeredText">
          <h1>Star Wars Characters</h1>
        </div>
        <p className={`loadingText ${isLoadingPage !== null || currentPage === null ? 'blinking' : ''}`}>Загрузка...</p>
      </div>
    );
  }

  const totalPages = Math.ceil(87 / peoplePerPage);
  const pages = Array.from({ length: Math.min(totalPages, 9) }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="charactersContainer">
      <div className="centeredText">
        <h1>Star Wars Characters</h1>
      </div>
      <ul>
        {people.map((person: Person, index: number) => (
          <li key={index}>
            <strong>Имя:</strong> {person.name} <br />
            <strong>Рост:</strong> {person.height} <br />
            <strong>Вес:</strong> {person.mass} <br />
            <Link to={`/characters/${person.name}`} className="detailButton">Подробнее</Link>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`paginationButton ${currentPage === page ? 'active' : ''} ${isLoadingPage === page ? 'loading' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarWarsPeopleList;
