import { questions } from "../data/questions"

const Result = ({ correct }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Finish"/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button>Попробовать снова</button>
    </div>
  )
}

export default Result