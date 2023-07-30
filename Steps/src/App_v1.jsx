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
          <p className="message">
            Step {counter + 1}: {message}
          </p>
          <div className="buttons">
            <button
              className="btn"
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
