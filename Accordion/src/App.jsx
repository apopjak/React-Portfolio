import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentlyOpen, setCurrentlyOpen] = useState();

  function handleToggle(num) {
    setCurrentlyOpen((currentlyOpen) => num);
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentlyOpen={currentlyOpen}
          onOpen={handleToggle}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        />
      ))}
    </div>
  );
}
// each item needs to know which one is open, so we have to lift up the state/
function AccordionItem({ num, title, text, currentlyOpen, onOpen }) {
  const isOpen = num === currentlyOpen;

  function handleToggle() {
    onOpen(num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p onClick={handleToggle} className="number">
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p onClick={handleToggle} className="title">
        {title}
      </p>
      <p onClick={handleToggle} className="icon">
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
