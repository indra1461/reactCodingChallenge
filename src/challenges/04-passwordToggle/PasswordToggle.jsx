import React, { useState } from "react";

const PasswordToggle = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const togglePassword = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <h2>Challenge 04 - Password Toggle</h2>
      <input
        type={toggle === false ? "password" : "text"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={togglePassword}>
        {toggle === false ? "👁 Show" : "🙈 Hide"}
      </button>
    </div>
  );
};

export default PasswordToggle;
