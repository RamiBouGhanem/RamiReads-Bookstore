// Categories.js
import React, { useState, useEffect, useRef } from 'react';
import { FaBook, FaGlobe, FaFeatherAlt, FaHeart } from 'react-icons/fa';

const categories = [
  { name: 'Fiction', icon: FaBook, color: 'bg-blue-900', hoverColor: 'hover:bg-blue-600' },
  { name: 'Non-Fiction', icon: FaGlobe, color: 'bg-green-900', hoverColor: 'hover:bg-green-600' },
  { name: 'Mystery', icon: FaFeatherAlt, color: 'bg-purple-900', hoverColor: 'hover:bg-purple-600' },
  { name: 'Romance', icon: FaHeart, color: 'bg-red-900', hoverColor: 'hover:bg-red-600' },
];

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const categoriesRef = useRef(null);

  // Fetch books based on the selected category from Open Library API
  const fetchBooks = async (category) => {
    try {
      const response = await fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json`);  // searching for books of the same category
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.works);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Handle category click with toggle functionality
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setBooks([]); 
    } else {
      setSelectedCategory(category);
      fetchBooks(category);
    }
  };

  // Set up the Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (categoriesRef.current) {
      observer.observe(categoriesRef.current);
    }

    return () => {
      if (categoriesRef.current) {
        observer.unobserve(categoriesRef.current);
      }
    };
  }, []);

  return (
    <div ref={categoriesRef} className="p-8 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen pt-32">
      <h2 className={`text-4xl font-bold pb-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-600 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          Browse
        </span> 
        <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-800 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          Categories
        </span>
      </h2>
      <hr className="border-b-4 border-gray-300 w-3/5 m-auto flex items-center justify-center mb-8"></hr>

      {/* Categories List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 pt-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out ${
              selectedCategory === category.name ? category.color : 'bg-gray-700'
            } ${category.hoverColor} ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.1}s`, opacity: isVisible ? 1 : 0 }}
          >
            <category.icon className="text-5xl mb-4 text-white hover:text-opacity-75 transition-colors duration-200" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </button>
        ))}
      </div>

      {/* Display Filtered Books */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-books' : 'opacity-0'}`}>
        {books.map((book, index) => (
          <div
            key={book.key || index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-900 hover:shadow-xl"
            style={{ animation: "fadeInSlideUp 0.5s ease forwards", animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
            {book.author_name && (
              <p className="text-gray-400 mb-2">by {book.author_name.join(', ')}</p>
            )}
            {book.first_publish_year && (
              <p className="text-gray-400">Published in {book.first_publish_year}</p>
            )}
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
                className="mt-4 w-full h-auto rounded-lg transform transition duration-200 hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
