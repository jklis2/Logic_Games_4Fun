import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Routers/Home";
import { Dashboard } from "./Routers/Dashboard";
import { Auth } from "./Routers/Auth";
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
import { playMusic, updateMusicSettings } from "./Redux/music-slice";
import { fetchUserData } from "./Redux/auth-slice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const isMusicEnabled = localStorage.getItem("isMusicEnabled") === "true";
    const selectedSong = localStorage.getItem("selectedSong");

    if (isMusicEnabled && selectedSong) {
      const userResponse = window.confirm("Do you want to keep playing music?");
      if (userResponse) {
        dispatch(playMusic({ song: selectedSong, enabled: true }));
      } else {
        localStorage.setItem("isMusicEnabled", "false");
        dispatch(updateMusicSettings({ song: selectedSong, enabled: false }));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const requireAuth = (element) => (user ? element : <Navigate to="/auth" />);

  const requireGuest = (element) =>
    !user ? element : <Navigate to="/profile" />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={requireGuest(<Auth />)} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={requireAuth(<MyProfile />)} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/achievements" element={requireAuth(<Achievements />)} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/games/sudoku" element={<Sudoku />} />
        <Route path="/games/crossword" element={<Crossword />} />
        <Route path="/games/memory" element={<Memory />} />
        <Route path="/games/2048" element={<Game2048 />} />
        <Route path="/games/minesweeper" element={<Minesweeper />} />
        <Route path="/games/snake" element={<Snake />} />
        <Route path="/games/maze" element={<Maze />} />
        <Route path="/games/ballInTheHole" element={<BallInheHole />} />
        <Route path="/games/quiz" element={<Quiz />} />
        <Route path="/games/ticTacToe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
