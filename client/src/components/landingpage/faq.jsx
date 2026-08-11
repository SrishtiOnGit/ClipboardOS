import { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      question: "What is ClipboardOS?",
      answer:
        "ClipboardOS is an intelligent clipboard manager that remembers everything you copy.",
    },
    {
      question: "Does ClipboardOS work offline?",
      answer:
        "Yes. Your clipboard history is stored locally and works even without internet.",
    },
    {
      question: "Can I search old clipboard items?",
      answer:
        "Absolutely. Search code snippets, prompts, links, notes, and more instantly.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes. Privacy Mode encrypts sensitive clipboard items and keeps your data secure.",
    },
  ];
  return (
    <div className="faq">
      <h1>
        You Questioned,<span> We Answered.</span>
      </h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
