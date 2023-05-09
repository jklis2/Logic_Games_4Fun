import Popover from "react-bootstrap/Popover";

export const memoryHowToPlayPop = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Memory Instruction</Popover.Header>
      <Popover.Body>
      <ol>
          <li>
            When the game starts, you will see a grid of cards with fruits on them. 
            To start the game, click on the "Start Game" button.
          </li>
          <li>
            Once the game starts, you can click on any card to flip it over and see the fruit. 
            You can flip over two cards at a time.
          </li>
          <li>
            If the two cards you flipped over have the same fruit, they will stay flipped over and you will earn a point.
          </li>
          <li>
            If the two cards you flipped over do not have the same fruit, they will flip back over after a short delay.
          </li>
          <li>
            Your goal is to match all pairs of cards as quickly as possible. The game ends when all pairs have been matched.
          </li>
      </ol>
      </Popover.Body>
    </Popover>
  );
  