import { useState,useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState({});

  const getAPI = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setCount(data);
  }

  useEffect(() => {
    getAPI();
  })


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
