import React from "react";

function WelcomeMessage({ isLoggedIn }) {
  const message = isLoggedIn
    ? "Welcome back, user!"
    : "Please log in to continue.";
  return <h1>{message}</h1>;
}

export default WelcomeMessage;
