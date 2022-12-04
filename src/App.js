import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./data/questions";
import "./index.scss";

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (

    <div className="App">
      <img src="https://cdn.pixabay.com/photo/2017/02/17/15/25/quiz-2074324_960_720.png" alt="Logo"></img>
      <div className="Quizz">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
      </div>
    </div>
  );
};

export default App;
