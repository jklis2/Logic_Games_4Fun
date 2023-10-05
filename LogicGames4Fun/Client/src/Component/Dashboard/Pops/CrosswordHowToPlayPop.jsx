import Popover from "react-bootstrap/Popover";

export const CrosswordHowToPlayPop = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Crossword Instruction</Popover.Header>
    <Popover.Body>
      Start with a blank 9x9 grid that has some of the cells already filled with
      digits. Identify the row, column, and box where the given digit is already
      present. Fill the empty cells in the same row, column, and box with the
      remaining digits from 1 to 9. Repeat the above step for each given digit
      until all the empty cells are filled. Ensure that each row, column, and
      box contains digits from 1 to 9 only once. The game is won when all the
      cells in the grid are filled with digits that satisfy the above
      conditions.
    </Popover.Body>
  </Popover>
);
