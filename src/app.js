import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";
import BottomNavigation from "./components/BottomNavigation";

const App = () => {
  return (
    <Router>
      <BottomNavigation />
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
};

export default App;
