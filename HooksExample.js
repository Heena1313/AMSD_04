import React, { useState } from "react";

function HooksExample() {
  const [score, setScore] = useState(10);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Verdana, sans-serif"
      }}
    >
      <h1>React Hooks – Score Tracker</h1>
      <h2>Current Score: {score}</h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setScore(score + 5)}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer"
          }}
        >
          Add 5
        </button>

        <button
          onClick={() => setScore(score - 3)}
          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Subtract 3
        </button>
      </div>

      <p
        style={{
          marginTop: "20px",
          fontSize: "16px",
          color: "gray"
        }}
      >
        Use the buttons above to update your score dynamically!
      </p>
    </div>
  );
}

export default HooksExample;
