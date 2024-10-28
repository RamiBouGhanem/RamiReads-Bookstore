import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import More from "./More";
import Categories from "./Categories";
import Contact from "./Contact";
import Header from "./Header";

function Home() {
  const navigate = useNavigate();

  // Function to scroll to the top smoothly 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
          <Header />
      <div className="video-container mt-0">
        <video autoPlay loop muted className="video-background">
          <source src="/4873467-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content flex flex-col items-center justify-center h-[100%] relative p-28 ">
          <h1 className="text-gray-300 text-6xl font-extrabold text-center animate-bounce mb-2">
            Dive into
          </h1>
          <h2 className="text-gray-300 text-9xl font-bold mb-2 p-4 pb-5 animate-pulse">
            Worlds Unknown
          </h2>
          <p className="text-gray-400 text-xl font-semibold mb-6 animate-fade-in">
            Discover stories that captivate the heart and inspire the mind
          </p>
          <button
            className="mt-6 py-3 px-6 opacity-80 bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700 hover:opacity-90"
            onClick={() => {
              navigate("/bookspage");
            }}
          >
            Explore Now!
          </button>
        </div>
      </div>
      <section id="categories">
        <Categories />
      </section>
      <section id="more">
        <More />
      </section>
      <section id="contact">
        <Contact />
      </section>{" "}
      <button
        onClick={scrollToTop}
        className="fixed w-12 h-12 text-2xl bottom-4 right-4 bg-gray-700 text-white mb-2 mr-6 rounded-full shadow-lg hover:bg-gray-800 transition-all ease-in-out"
        title="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}

export default Home;
