import { SudokuHowToPlayPop } from "./Pops/SudokuHowToPlayPop";
import { SudokuTipsPop } from "./Pops/SudokuTipsPop";
import { CrosswordHowToPlayPop } from "./Pops/CrosswordHowToPlayPop";
import { CrosswordTipsPop } from "./Pops/CrosswordTipsPop";
import { MemoryHowToPlayPop } from "./Pops/MemoryHowToPlayPop";
import { MemoryTipsPop } from "./Pops/MemoryTipsPop";

export const logicGames = [
  {
    id: 1,
    name: "sudoku",
    img: `${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`,
    alt: "Sudoku logo",
    pop: <SudokuHowToPlayPop />,
    tipsPop: <SudokuTipsPop />
  },
  {
    id: 2,
    name: "crossword",
    img: `${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`,
    alt: "Crossword logo",
    pop: <CrosswordHowToPlayPop />,
    tipsPop: <CrosswordTipsPop />
  },
  {
    id: 3,
    name: "memory",
    img: `${process.env.PUBLIC_URL}/GamesImages/MemoryLogo.png`,
    alt: "Memory logo",
    pop: <MemoryHowToPlayPop />,
    tipsPop: <MemoryTipsPop />
  },
];
