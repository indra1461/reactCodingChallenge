import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library...",
  },
  {
    id: 2,
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language...",
  },
  {
    id: 3,
    question: "What is useState?",
    answer: "useState is a React Hook...",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const expand = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <div>
      <h2>Accordion FAQ's</h2>

      {faqs.map((f) => (
        <div id={f.id}>
          <button onClick={() => expand(f.id)}>
            <span>{f.question}</span>
            <span>{activeId === f.id ? "-" : "+"}</span>
          </button>
          {activeId === f.id && <p>{f.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
