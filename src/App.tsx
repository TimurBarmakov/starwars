import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarWarsPeopleList from './components/StarWarsPeopleList.tsx';
import CharacterDetail from './components/CharacterDetail.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarWarsPeopleList />} caseSensitive={true} />
        <Route path="/characters/:name" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
