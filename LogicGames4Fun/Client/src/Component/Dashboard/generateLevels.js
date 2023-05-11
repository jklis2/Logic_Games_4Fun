import { Fab } from "@mui/material";

const generateLevels = function (minLevel, maxLevel, game, runGame) {
    const levels = [];
    for (let lvl = minLevel; lvl < maxLevel; lvl++) {
      levels.push(
        <Fab
          key={lvl}
          variant="extended"
          size="small"
          sx={{
            bgcolor: "rgb(255, 255, 255, 0.0)",
            margin: { xs: "8px", md: "10px" },
          }}
          aria-label="add"
        >
          <span onClick={() => runGame(lvl, game)}>{lvl}</span>
        </Fab>
      );
    }
    return levels;
  };

export default generateLevels;