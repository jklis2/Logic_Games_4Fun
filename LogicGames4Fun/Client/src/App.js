import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Routers/Home";
import { Dashboard } from "./Routers/Dashboard";
import { LoginAndRegister } from "./Routers/LoginAndRegister";
import { Contact } from "./Routers/Contact";
import { AboutUs } from "./Routers/AboutUs";
import { MyProfile } from "./Routers/Profile";
import { PrivacyPolicy } from "./Routers/PrivacyPolicy";
import { Achievements } from "./Routers/Achievements";
import { Navigate } from "react-router-dom";
import { Sudoku } from "./Routers/Sudoku";
import { Crossword } from "./Routers/Crossword";
import { Memory } from "./Routers/Memory";
import { Puzzle } from "./Routers/Puzzle";

import { Test } from "./Routers/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginAndRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/games/sudoku" element={<Sudoku />} />
        <Route path="/games/crossword" element={<Crossword />} />
        <Route path="/games/memory" element={<Memory />} />
        <Route path="/games/puzzle" element={<Puzzle />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
