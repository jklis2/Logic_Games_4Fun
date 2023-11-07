import React, { useEffect, useState } from "react";

export const MathOperationBallInTheHole = ({ difficulty, setMathResult, trigger }) => {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    generateOperation();
  }, [difficulty, trigger]);

  const generateOperation = () => {
    const newOperation = generateMathOperation(difficulty);
    setOperation(newOperation.operation);
    setResult(newOperation.result);
    setMathResult(newOperation.result);
  };

  return (
    <div className="math-operation">
      {operation} = {result !== null ? result : "?"}
    </div>
  );
};

export const generateMathOperation = (difficulty) => {
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const calculateResult = (num1, operation, num2) => {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "**":
        result = Math.pow(num1, num2);
        break;
      case "√":
        result = Math.sqrt(num1);
        break;
      default:
        return null;
    }
    return result % 1 !== 0 ? Number(result.toFixed(1)) : result;
  };

  if (difficulty === "easy") {
    let num1 = random(0, 20);
    let num2 = random(0, 20);
    const operation = random(0, 1) === 0 ? "+" : "-";
    if (operation === "-" && num1 < num2) {
      [num1, num2] = [num2, num1];
    }
    const result = calculateResult(num1, operation, num2);
    return { operation: `${num1} ${operation} ${num2}`, result };
  }

  if (difficulty === "medium") {
    const num1 = random(0, 100);
    const num2 = random(0, 100);
    const operations = ["+", "-", "*"];
    const operation = operations[random(0, operations.length - 1)];
    const result = calculateResult(num1, operation, num2);
    return { operation: `${num1} ${operation} ${num2}`, result };
  }

  if (difficulty === "hard") {
    const num1 = random(0, 1000);
    let num2 = random(0, 1000);
    const operations = ["+", "-", "*", "/"];
    const operation = operations[random(0, operations.length - 1)];
    if (operation === "/" && num2 === 0) num2 = 1;
    const result = calculateResult(num1, operation, num2);
    return { operation: `${num1} ${operation} ${num2}`, result };
  }

  if (difficulty === "impossible") {
    const num1 = random(0, 10000);
    let num2 = random(0, 10000);
    const operations = ["+", "-", "*", "/", "**", "√"];
    const operation = operations[random(0, operations.length - 1)];
    if (operation === "/" && num2 === 0) num2 = 1;
    const result = calculateResult(num1, operation, num2);
    return { operation: `${num1} ${operation} ${num2}`, result };
  }

  return { operation: "Select Difficulty", result: null };
};

export default MathOperationBallInTheHole;
