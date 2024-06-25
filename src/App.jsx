import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

const App = () => {
  return (
    <Router>
     
      

      <div>
      <Navbar />
        <Routes>
          <Route path="/news" exact element={<News />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
