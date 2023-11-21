function Card({ image, flipped, chooseCard }) {
  const cardClickHandle = () => {
    chooseCard(image);
  };

  return (
    <div
      className={`memory-card bg-white d-flex align-items-center justify-content-center ${flipped ? `memory-card__matched` : ""}`}
      onClick={cardClickHandle}
    >
      <img
        style={{ transform: "rotateY(180deg)" }}
        src={image.src}
        alt="text"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
        <line x1="12" y1="19" x2="12" y2="19.01"></line>
      </svg>
    </div>
  );
}
export default Card;
