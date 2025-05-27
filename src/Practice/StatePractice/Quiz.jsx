import React, { useState } from "react";

const Quiz = () => {
  const questions = {
    question: "Who is the prime mininster of India ?",
    options: ["Ambani", "Modi", "Hemanta"],
    answer: "Modi",
  };
  const [ques, setQues] = useState("");
  const [result, setResult] = useState("");

  const getAns = (q) => {
    setQues(q);
    if (q === questions.answer) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
  };
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        marginTop: "10px",
      }}
    >
      <h3>{questions.question}</h3>
      {questions.options.map((q, i) => {
        return (
          <p
            style={{
              cursor: "pointer",
              backgroundColor: ques === q ? "green" : "",
            }}
            onClick={() => getAns(q)}
          >
            {q}
          </p>
        );
      })}

      <h2 style={{ color: ques === questions.answer ? "green" : "red" }}>
        {result}
      </h2>
    </div>
  );
};

export default Quiz;
