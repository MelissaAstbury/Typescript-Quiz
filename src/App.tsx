import React, { useState } from "react";

import { fetchQuestions, Difficulty } from "./API";

import QuestionCard from "./components/QuestionCard/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Welcome to the Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ... </p>
      {/* <QuestionCard
        question={questions[number].question}
        answers={questions[number].answers}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
