import { useState,useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import SignInSignUp from "./SignIn-Signup";

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
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Signin-Signup" element={<SignInSignUp/>} />
      </Routes>
    </>
  );
}

export default App;
