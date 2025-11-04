// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HeroSplit from "./components/HeroSplit";
import Discover from "./Discover";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans bg-white min-h-screen text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSplit />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
