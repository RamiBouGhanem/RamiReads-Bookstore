import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const BooksPage = () => {
  const [searchBook, setSearchBook] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  useEffect(() => {
    filterBooks();
  }, [searchBook, yearInput, authorInput, books]);

  const searchButtonClicked = async () => {
    if (!searchBook) {
      setError('Please enter a book title or author name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://openlibrary.org/search.json?${searchType}=${searchBook}`);
      const data = await response.json();
      setBooks(data.docs);
      setFilteredBooks(data.docs); // Reset the filtered books to show all results after search
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterBooks = () => {
    let updatedBooks = books;

    if (searchBook) {
      updatedBooks = updatedBooks.filter(book =>
        book[searchType]?.toLowerCase().includes(searchBook.toLowerCase())
      );
    }

    if (yearInput) {
      updatedBooks = updatedBooks.filter(book =>
        book.first_publish_year === Number(yearInput) // Filter by the exact year
      );
    }

    if (authorInput) {
      updatedBooks = updatedBooks.filter(book =>
        book.author_name && book.author_name.some(author => author.toLowerCase().includes(authorInput.toLowerCase()))
      );
    }

    setFilteredBooks(updatedBooks);
  };

  return (
    <>
      <Header />
      <div className="books-page min-h-screen p-6 bg-gradient-to-br from-black to-gray-800">
        <h1 className="text-5xl text-center my-4 text-gray-300">Discover Your Next Read</h1>
        <p className="text-center text-gray-400 mb-4">Enter a book title or author name in the search bar below to find your next favorite book!</p>
        
        <form className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            className="border border-gray-700 rounded-lg p-2 mr-2 bg-gray-800 text-white placeholder-gray-500"
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border border-gray-700 bg-gray-800 text-white rounded-lg p-2 mr-2"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          <button
            type="button"
            onClick={searchButtonClicked}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Search
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading && <p className="text-center text-gray-300">Loading...</p>}

        {/* No Books Found Message */}
        {filteredBooks.length === 0 && !loading && (
          <div className="text-center mb-6">
            <p className="text-gray-400">No books found. Try searching for something else!</p>
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 text-center flex justify-center space-x-4">
          <div className="flex flex-col">
            <h2 className="text-xl text-gray-300 mb-2">Filter by Year</h2>
            <input
              type="text"
              placeholder="Enter publication year"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              className="border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-gray-300 mb-2">Filter by Author</h2>
            <input
              type="text"
              placeholder="Enter author name"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
              className="border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.key} className="bg-gray-800 text-white p-4 rounded-lg shadow-md transition duration-200 hover:shadow-lg">
              <Link to={`/book/${book.key.split('/')[2]}`}> {/* Adjusted to use book ID for the URL */}
                <h2 className="text-xl font-bold">{book.title}</h2>
                {book.author_name && (
                  <p className="text-gray-400">
                    by <Link to={`/author/${book.author_name[0].toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 underline">{book.author_name.join(', ')}</Link>
                  </p>
                )}
                {book.first_publish_year && <p className="text-gray-400">Published in {book.first_publish_year}</p>}
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                    alt={book.title}
                    className="mt-2 w-full h-auto rounded-lg"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
