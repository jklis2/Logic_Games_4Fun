import React, { useEffect, useState } from "react";
import { generateMathOperation } from "./utils/generateMathOperation";

export const MathOperationBallInTheHole = ({
  difficulty,
  setMathResult,
  trigger,
}) => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    generateOperation();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, trigger]);

  const generateOperation = () => {
    const newOperation = generateMathOperation(difficulty);
    setOperation(newOperation.operation);
    setResult(newOperation.result);
    setMathResult(newOperation.result);
  };

  return (
    <div className="ball-in-the-hole__operation mb-2">
      Find a hole with the result: {operation} ={" "}
      {result !== null ? result : "?"}
    </div>
  );
};

export default MathOperationBallInTheHole;
