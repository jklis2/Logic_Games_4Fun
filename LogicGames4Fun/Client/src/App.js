import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Routers/Home";
import { Dashboard } from "./Routers/Dashboard";
import { LoginAndRegister } from "./Routers/LoginAndRegister";
import { Contact } from "./Routers/Contact";
import { AboutUs } from "./Routers/AboutUs";
import { MyProfile } from "./Routers/Profile";
import { PrivacyPolicy } from "./Routers/PrivacyPolicy";
import { Achievements } from "./Routers/Achievements";
import { Settings } from "./Routers/Settings";
import { Navigate } from "react-router-dom";
import { Sudoku } from "./Routers/Sudoku";
import { Crossword } from "./Routers/Crossword";
import { Memory } from "./Routers/Memory";
import { Game2048 } from "./Routers/Game2048";
import { Minesweeper } from "./Routers/Minesweeper";
import { Snake } from "./Routers/Snake";
import { Maze } from "./Routers/Maze";
import { BallInheHole } from "./Routers/BallInTheHole";
import { Quiz } from "./Routers/Quiz";
import { TicTacToe } from "./Routers/TicTacToe";
import { initializeMusic, playMusic } from "./Redux/music-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isMusicEnabled = localStorage.getItem("isMusicEnabled") === "true";
    const selectedSong = localStorage.getItem("selectedSong");

    if (isMusicEnabled && selectedSong) {
      dispatch(playMusic({ song: selectedSong, enabled: isMusicEnabled }));
    } else {
      dispatch(initializeMusic());
    }
  }, [dispatch]);
  
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/games/sudoku" element={<Sudoku />} />
        <Route path="/games/crossword" element={<Crossword />} />
        <Route path="/games/memory" element={<Memory />} />
        <Route path="/games/2048" element={<Game2048 />} />
        <Route path="/games/minesweeper" element={<Minesweeper />} />
        <Route path="/games/snake" element={<Snake />} />
        <Route path="/games/maze" element={<Maze />} />
        <Route path="/games/ballInTheHole" element={<BallInheHole />} />
        <Route path="/games/Quiz" element={<Quiz />} />
        <Route path="/games/ticTacToe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
