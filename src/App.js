import "./App.css";
import { useState } from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";

const quenitons = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ?",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это футкция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];
function Result({ correct }) {
  return (
    <div className="m-5 text-center">
      <Card
        style={{
          width: "38rem",
          borderRadius: "40px",
          boxShadow: "10px 10px 15px",
        }}
      >
        <div className="mt-4">
          <Card.Img
            style={{
              width: "150px",
            }}
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/9107/9107769.png"
          />
        </div>

        <Card.Body>
          <Card.Title className="fs-4 m-2">
            Вы отгадали {correct} ответа из {quenitons.length}
          </Card.Title>
          <a href="/">
            <Button
              className="px-4 p-2 m-3 fs-5"
              style={{
                borderRadius: "50px",
              }}
              variant="danger"
            >
              Попробать снова
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
function Came({ step, queniton, onClickVariant }) {
  const now = Math.round((step / quenitons.length) * 100);
  return (
    <div className="m-5">
      <Card
        className="p-3"
        style={{
          width: "38rem",
          borderRadius: "40px",
          boxShadow: "10px 10px 15px",
        }}
      >
        <Card.Body>
          <ProgressBar now={now} label={`${now}%`} />
          <Card.Title className="fs-3 mt-3 mb-3">{queniton.title}</Card.Title>
          <ul style={{ listStyle: "none" }} className="p-0">
            {queniton.variants.map((text, index) => {
              return (
                <li
                  onClick={() => onClickVariant(index)}
                  key={text}
                  className="p-2 mb-2"
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const queniton = quenitons[step];

  const onClickVariant = (index) => {
    console.log(index);
    setStep(step + 1);
    if (index === queniton.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App d-flex justify-content-center">
      {step !== quenitons.length ? (
        <Came step={step} queniton={queniton} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
