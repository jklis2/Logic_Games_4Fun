import Popover from "react-bootstrap/Popover";

export const memoryTipsPop = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Memory Tips</Popover.Header>
      <Popover.Body>
        <ol>
          <li>
            Pay attention to the cards you flip over. Try to remember where each card is located on the grid and what fruit 
            is on each card. This will help you find matching pairs more quickly.
          </li>
          <li>
            Focus on flipping over one pair of cards at a time. 
            If you try to flip over too many cards at once, it can be difficult to remember which ones you have already seen.
          </li>
          <li>
            Use your short-term memory to your advantage. 
            Try to memorize the location and fruit of each card you flip over, even if it doesn't match with another card.
          </li>
          <li>
            Don't give up! With practice, you can improve your memory and increase your chances of 
            finding matching pairs quickly.
          </li>
        </ol>
  
        <strong>Enjoy playing Memory!</strong>
      </Popover.Body>
    </Popover>
  );
  