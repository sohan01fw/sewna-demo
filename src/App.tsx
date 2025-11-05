// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HeroSplit from "./components/HeroSplit";
import Discover from "./Discover";
import OnboardingPage from "./OnBoarding";
import Dashboard from "./components/dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans bg-white min-h-screen text-black">
        <Routes>
          <Route path="/" element={<HeroSplit />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
