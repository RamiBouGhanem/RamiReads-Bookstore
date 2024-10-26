// Modal.js
import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null; // Don't render if no item is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-800 rounded-lg p-8 max-w-lg mx-auto relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
          {item.title}
        </h3>
        <img src={item.imageUrl} alt={item.title} className="mb-4 w-full rounded-lg h-96" />
        <p className="text-gray-300 mb-4">{item.description}</p>
        <p className="text-gray-400">{item.additionalInfo}</p>
      </div>
    </div>
  );
};

export default Modal;
