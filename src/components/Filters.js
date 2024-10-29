import { useState } from 'react';

function Filters({ onFilterChange }) {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    onFilterChange({ genre: event.target.value, year });
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    onFilterChange({ genre, year: event.target.value });
  };

  return (
    <div className="filters">
      <select onChange={handleGenreChange} value={genre}>
        <option value="">All Genres</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
      </select>

      <select onChange={handleYearChange} value={year}>
        <option value="">All Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default Filters;
