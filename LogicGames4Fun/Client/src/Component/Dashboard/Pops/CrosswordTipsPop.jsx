import Popover from "react-bootstrap/Popover";

export const CrosswordTipsPop = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Crossword Tips</Popover.Header>
    <Popover.Body>
    <ol>
        <li>
          Start by filling the easiest cells, i.e., the ones with the fewest
          possible options. This will help you make progress quickly.
        </li>
        <li>
          Use logic and deduction to eliminate possible options for each cell.
          This will help you identify the correct digit for each cell.
        </li>
        <li>
          Double-check your work to ensure that you have not made any mistakes.
        </li>
        <li>Practice regularly to improve your skills and speed.</li>
      </ol>

      <strong>Enjoy playing Crossword!</strong>
    </Popover.Body>
  </Popover>
);
