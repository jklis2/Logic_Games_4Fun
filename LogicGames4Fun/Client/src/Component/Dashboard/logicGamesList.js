import GamePop from "./GamePop";

export const logicGamesList = [
  {
    id: 1,
    name: "sudoku",
    img: `${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`,
    alt: "Sudoku logo",
    pop: (
      <GamePop
        gameTranslation="sudokuHowToPlayPop"
        header="sudokuHowToPlayPop.header"
        content="sudokuHowToPlayPop.instructions"
      />
    ),
    tipsPop: (
      <GamePop
        gameTranslation="sudokuTipsPop"
        header="sudokuTipsPop.header"
        content={[
          "sudokuTipsPop.tip1",
          "sudokuTipsPop.tip2",
          "sudokuTipsPop.tip3",
          "sudokuTipsPop.tip4",
        ]}
        enjoyMessage="sudokuTipsPop.enjoy"
      />
    ),
  },
  {
    id: 2,
    name: "crossword",
    img: `${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`,
    alt: "Crossword logo",
    pop: (
      <GamePop
        gameTranslation="crosswordHowPop"
        header="crosswordHowPop.instructionTitle"
        content="crosswordHowPop.instructions"
      />
    ),
    tipsPop: (
      <GamePop
        gameTranslation="crosswordTipsPop"
        header="crosswordTipsPop.header"
        content={[
          "crosswordTipsPop.tip1",
          "crosswordTipsPop.tip2",
          "crosswordTipsPop.tip3",
          "crosswordTipsPop.tip4",
        ]}
        enjoyMessage="crosswordTipsPop.enjoy"
      />
    ),
  },
  {
    id: 3,
    name: "memory",
    img: `${process.env.PUBLIC_URL}/GamesImages/MemoryLogo.png`,
    alt: "Memory logo",
    pop: (
      <GamePop
        gameTranslation="memoryHowToPlayPop"
        header="memoryHowToPlayPop.header"
        content={[
          "memoryHowToPlayPop.step1",
          "memoryHowToPlayPop.step2",
          "memoryHowToPlayPop.step3",
          "memoryHowToPlayPop.step4",
          "memoryHowToPlayPop.step5",
        ]}
      />
    ),
    tipsPop: (
      <GamePop
        gameTranslation="memoryTipsPop"
        header="memoryTipsPop.header"
        content={[
          "memoryTipsPop.tip1",
          "memoryTipsPop.tip2",
          "memoryTipsPop.tip3",
          "memoryTipsPop.tip4",
        ]}
        enjoyMessage="memoryTipsPop.enjoy"
      />
    ),
  },
];
