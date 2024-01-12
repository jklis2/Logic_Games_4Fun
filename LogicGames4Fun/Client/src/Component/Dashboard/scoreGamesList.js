import GamePop from "./GamePop";

export const scoreGamesList = [
  {
    id: 1,
    name: "2048",
    img: `${process.env.PUBLIC_URL}/GamesImages/2048Logo.png`,
    alt: "2048 logo",
    pop: (
      <GamePop
        gameTranslation="game2048Pop"
        header="game2048Pop.welcomeMessage"
        content={[
          "game2048Pop.selectDifficulty",
          "game2048Pop.useArrows",
          "game2048Pop.combineTiles",
          "game2048Pop.newTile",
          "game2048Pop.winGame",
          "game2048Pop.loseGame",
        ]}
        enjoyMessage="game2048Pop.enjoyPlaying"
      />
    ),
  },
  {
    id: 2,
    name: "minesweeper",
    img: `${process.env.PUBLIC_URL}/GamesImages/MinesweeperLogo.png`,
    alt: "Minesweeper logo",
    pop: (
      <GamePop
        gameTranslation="minesweeperPop"
        header="minesweeperPop.instructionTitle"
        content={[
          "minesweeperPop.step1",
          "minesweeperPop.step2",
          "minesweeperPop.step3",
          "minesweeperPop.step4",
          "minesweeperPop.step5",
          "minesweeperPop.step6",
        ]}
        enjoyMessage="minesweeperPop.enjoy"
      />
    ),
  },
  {
    id: 3,
    name: "snake",
    img: `${process.env.PUBLIC_URL}/GamesImages/SnakeLogo.png`,
    alt: "Snake logo",
    pop: (
      <GamePop
        gameTranslation="snakePop"
        header="snakePop.instructionTitle"
        content={[
          "snakePop.step1",
          "snakePop.step2",
          "snakePop.step3",
          "snakePop.step4",
          "snakePop.step5",
        ]}
        enjoyMessage="snakePop.enjoy"
      />
    ),
  },
  {
    id: 4,
    name: "maze",
    img: `${process.env.PUBLIC_URL}/GamesImages/MazeLogo.png`,
    alt: "Maze logo",
    pop: (
      <GamePop
        gameTranslation="mazePop"
        header="mazePop.instructionTitle"
        content={["mazePop.step1", "mazePop.step2", "mazePop.step3"]}
        enjoyMessage="mazePop.enjoy"
      />
    ),
  },
  {
    id: 5,
    name: "ballInTheHole",
    img: `${process.env.PUBLIC_URL}/GamesImages/BallInTheHoleLogo.png`,
    alt: "Ball In The Hole logo",
    pop: (
      <GamePop
        gameTranslation="ballInTheHolePop"
        header="ballInTheHolePop.instructionTitle"
        content={[
          "ballInTheHolePop.step1",
          "ballInTheHolePop.step2",
          "ballInTheHolePop.step3",
          "ballInTheHolePop.step4",
        ]}
        enjoyMessage="ballInTheHolePop.enjoy"
      />
    ),
  },
  {
    id: 6,
    name: "quiz",
    img: `${process.env.PUBLIC_URL}/GamesImages/QuizLogo.png`,
    alt: "Quiz logo",
    pop: (
      <GamePop
        gameTranslation="quizPop"
        header="quizPop.instructionTitle"
        content={[
          "quizPop.step1",
          "quizPop.step2",
          "quizPop.step3",
          "quizPop.step4",
          "quizPop.step5",
        ]}
        enjoyMessage="quizPop.enjoy"
      />
    ),
  },
  {
    id: 7,
    name: "ticTacToe",
    img: `${process.env.PUBLIC_URL}/GamesImages/TicTacToeLogo.png`,
    alt: "TicTacToe logo",
    pop: (
      <GamePop
        gameTranslation="ticTacToePop"
        header="ticTacToePop.instructionTitle"
        content={[
          "ticTacToePop.step1",
          "ticTacToePop.step2",
          "ticTacToePop.step3",
          "ticTacToePop.step4",
        ]}
        enjoyMessage="ticTacToePop.enjoy"
      />
    ),
  },
];
