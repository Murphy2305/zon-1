import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Posts from "./Pages/Posts"
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/post/:slug" element={<Posts />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
  );
}

export default App;
