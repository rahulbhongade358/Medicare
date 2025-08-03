import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Public/Home";
import Contact from "./Pages/Public/Contact";
import Explore from "./Pages/Public/Explore";
import Login from "./Pages/Public/Login";
import About from "./Pages/Public/About";
import SignUp from "./Pages/Public/SignUp";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
