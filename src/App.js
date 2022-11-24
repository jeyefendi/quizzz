import { useState } from "react";
import Game from "./components/Game";
import { questions } from "./data/questions";
import "./index.scss";

const App = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1)
  }

  return (
    <div className="App">
      <Game step={step} question={question} onClickVariant={onClickVariant} />
      {/* <Result /> */}
    </div>
  );
}

export default App;