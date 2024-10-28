// More.js
import React, { useState } from "react";
import Modal from "./Modal"; // Import the modal component

const More = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      title: "Featured Book",
      description: "Explore our featured book of the month.",
      imageUrl: "./thinkandgrowrich.png",
      footerText: "A must-read for every book lover!",
      additionalInfo:
        "This featured book dives deep into the world of literature and storytelling.",
    },
    {
      title: "Top Author",
      description: "Learn more about this month’s top author.",
      imageUrl: "./RobertKiyosaki.jpg",
      footerText: "Inspiring stories await!",
      additionalInfo:
        "This author has penned numerous bestselling novels that capture the hearts of readers.",
    },
    {
      title: "New Releases",
      description: "Discover the latest additions to our collection.",
      imageUrl: "./pexels-pixabay-256450.jpg",
      footerText: "Be the first to dive in!",
      additionalInfo:
        "Check out the latest titles that have just hit our shelves, featuring diverse genres and authors.",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 pt-32 bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white min-h-screen border-t-4 border-gray-900">
      <h2 className="text-4xl font-semibold mb-8 text-center p-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-900 animate-fade-in">
        Check Out These Picks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer"
            onClick={() => openModal(item)} // Open modal on click
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {item.title}
            </h3>
            <p className="mb-4 text-gray-300">{item.description}</p>
            <p className="mt-auto mb-4 text-gray-400">{item.footerText}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal item={selectedItem} onClose={() => setIsModalOpen(false)} />
      )}{" "}
      {/* Modal component */}
    </div>
  );
};

export default More;
