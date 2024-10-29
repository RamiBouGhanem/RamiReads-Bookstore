import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams(); // Get the bookId from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`); // Fetch book details
        if (!response.ok) {
          throw new Error('Book not found');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-details p-6 bg-gray-900 text-white">
      {book ? (
        <>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          {book.authors && book.authors.length > 0 && (
            <p className="mt-2">
              Author: {book.authors.map((author) => (
                <span key={author.key}>{author.name}{author.key !== book.authors[book.authors.length - 1].key && ', '}</span>
              ))}
            </p>
          )}
          {book.first_publish_year && <p>Published: {book.first_publish_year}</p>}
          {book.number_of_pages && <p>Pages: {book.number_of_pages}</p>}
          {book.languages && book.languages.length > 0 && (
            <p>
              Language: {book.languages.map((lang) => lang.name).join(', ')}
            </p>
          )}
          {book.subjects && book.subjects.length > 0 && (
            <div>
              <p>Subjects:</p>
              <ul className="list-disc ml-5">
                {book.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          )}
          <p>{book.description ? book.description.value : 'No description available.'}</p>
          {book.cover && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover.id}-L.jpg`}
              alt={book.title}
              className="mt-4"
            />
          )}
          {book.links && book.links.length > 0 && book.links.map((link) => (
            <div key={link.key} className="mt-4">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                {link.title || 'Read Online'}
              </a>
            </div>
          ))}
        </>
      ) : (
        <p>Book details not found.</p>
      )}
    </div>
  );
};

export default BookDetails;
