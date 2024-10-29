import "./App.css";
import Login from "./components/Login";
// import Header from "./components/Header"; // Uncomment this if you want to use the Header component
import Home from "./components/Home";
import Books from "./components/Books";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import AuthorDetails from "./components/AuthorDetails";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/bookspage" element={<Books />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/author/:authorName" element={<AuthorDetails />} />
      </Routes>
    </div>
  );
};

export default App;
