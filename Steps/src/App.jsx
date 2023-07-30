import React from "react";

const data = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(true);
  var message = data[counter];

  function handleNext() {
    if (counter < 2) {
      setCounter((counter) => counter + 1);
    }
  }

  function handlePrevious() {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${counter >= 0 && "active"}`}>1</div>
            <div className={`${counter >= 1 && "active"}`}>2</div>
            <div className={`${counter >= 2 && "active"}`}>3</div>
          </div>
          <StepMessage counter={counter}>{message}</StepMessage>
          <div className="buttons">
            <Button click={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span>Previous
            </Button>

            <Button click={handleNext} bgColor="#7950f2" textColor="#fff">
              <span>👉</span>Next
            </Button>
          </div>
          <StepMessage counter={1}>Step one</StepMessage>
          <StepMessage counter={2}>Step Two</StepMessage>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, click, children }) {
  return (
    <button
      className="btn"
      onClick={click}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function StepMessage({ counter, children }) {
  return (
    <div>
      <p className="message">
        Step {counter + 1}: {children}
      </p>
    </div>
  );
}
