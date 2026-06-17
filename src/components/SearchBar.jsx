import { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a city..."
        aria-label="Search for a city"
        disabled={loading}
      />
      <button type="submit" disabled={loading || !query.trim()}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}
