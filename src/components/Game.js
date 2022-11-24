const Game = ({ question, onClickVariant }) => {
    return (
      <>
        <div className="progress">
          <div style={{ width: "50%" }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => (
            <li onClick={() => onClickVariant(index)} key={variant}>{variant}</li>
          ))}
        </ul>
      </>
    );
  }

export default Game