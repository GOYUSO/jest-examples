import React, { useState } from "react";

function Greeting({ name }) {
  const [message, setMessage] = useState("Hello");

  const handleClick = () => {
    setMessage("Goodbye");
  };

  return (
    <div>
      <h1>
        {message}, {name}!
      </h1>
      <button onClick={handleClick}>Change Message</button>
    </div>
  );
}

export default Greeting;
