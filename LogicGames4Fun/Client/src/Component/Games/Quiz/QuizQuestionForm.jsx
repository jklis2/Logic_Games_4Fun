import React, { useState } from "react";

function QuizQuestionForm({ setScreen, categories }) {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question added:", {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
      category,
    });
  };

  return (
    <div>
      <h1>Add Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Option A:
            <input
              type="text"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Option B:
            <input
              type="text"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Option C:
            <input
              type="text"
              value={optionC}
              onChange={(e) => setOptionC(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Option D:
            <input
              type="text"
              value={optionD}
              onChange={(e) => setOptionD(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Correct Answer:
            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
            >
              <option value="" disabled>
                Select correct answer
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </label>
        </div>
        <div>
          <button type="button" onClick={() => setScreen("mainMenu")}>
            Back
          </button>
          <button type="submit">Add Question</button>
        </div>
      </form>
    </div>
  );
}

export default QuizQuestionForm;
