import React, { useState } from "react";

const Toggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonText, setButtonText] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonText(buttonText === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div
      className="toggle-container"
      style={{ backgroundColor, color: textColor }}
    >
      <button
        className="toggle-btn"
        onClick={handleClick}
        style={{
          backgroundColor: buttonText,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Dark Mode" : "Light Mode"}
      </button>
      <section className="toggle-message">Welcome to the Real World</section>
    </div>
  );
};

export default Toggle;
