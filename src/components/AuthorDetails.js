import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AuthorDetails = () => {
  const { authorName } = useParams(); // Get the authorName from the URL
  const [author, setAuthor] = useState(null);
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search/authors.json?q=${authorName}`);
        if (!response.ok) {
          throw new Error('Author not found');
        }
        const data = await response.json();
        setAuthor(data.docs[0]); // Get the first author from the results
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorDetails();
  }, [authorName]);

  useEffect(() => {
    const fetchAuthorWorks = async () => {
      if (author) {
        try {
          const response = await fetch(`https://openlibrary.org/authors/${author.key}/works.json`);
          if (!response.ok) {
            throw new Error('Works not found');
          }
          const data = await response.json();
          setWorks(data.entries); // Set the author's works
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchAuthorWorks();
  }, [author]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="author-details p-6 bg-gray-900 text-white">
      {author ? (
        <>
          <h1 className="text-3xl font-bold">{author.name}</h1>
          <p className="mt-2">
            {author.bio || author.description}
          </p>
          {author.birth_date && (
            <p className="mt-1">Born: {author.birth_date}</p>
          )}
          {author.death_date && (
            <p className="mt-1">Died: {author.death_date}</p>
          )}
          <h2 className="text-2xl font-semibold mt-4">Books by {author.name}:</h2>
          <ul className="mt-2">
            {works.length > 0 ? (
              works.map((work) => (
                <li key={work.key} className="mt-2">
                  <a href={`/book/${work.key.split('/')[2]}`} className="text-blue-400">
                    {work.title}
                  </a>
                </li>
              ))
            ) : (
              <p>No works available for this author.</p>
            )}
          </ul>
        </>
      ) : (
        <p>Author details not found.</p>
      )}
    </div>
  );
};

export default AuthorDetails;
