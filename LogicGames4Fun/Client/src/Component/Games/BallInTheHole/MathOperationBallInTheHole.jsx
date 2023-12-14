import React, { useEffect, useState } from "react";
import { generateMathOperation } from "./utils/generateMathOperation";
import { useTranslation } from "react-i18next";

export const MathOperationBallInTheHole = ({
  difficulty,
  setMathResult,
  trigger,
}) => {
  const [t] = useTranslation(["translation", "ballInTheHole"]);
  const [operation, setOperation] = useState("");
  // eslint-disable-next-line no-unused-vars
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
      {t("ballInTheHole.findHoleMessage")} {operation} {" "}
    </div>
  );
};

export default MathOperationBallInTheHole;
