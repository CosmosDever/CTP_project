import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
