import React, { useState } from "react";

const CharcterCount = () => {
  const [value, setValue] = useState("");
  const characterCount = value.length;
  const maxLength = 100;
  const remaining = maxLength - value.length;

  return (
    <div>
      <h2>Challenge 08 - Character Count</h2>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={100}
      ></textarea>
      <p>
        Characters: {characterCount} / {maxLength}
      </p>

      {characterCount === 0 ? <p>No content entered</p> : null}
      <p>Remaining: {remaining}</p>

      {characterCount >= 80 && <p>⚠️ Only {remaining} characters remaining</p>}
    </div>
  );
};

export default CharcterCount;
