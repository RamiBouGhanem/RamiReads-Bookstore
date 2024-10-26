import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home'
import Books from './components/Books'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/bookspage" element={<Books />} />
      </Routes>
    </div>
  );
};

export default App;
