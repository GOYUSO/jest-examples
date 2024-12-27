import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomeMessage from "../src/09-conditional";

describe("conditional component", () => {
  test("should render logged in content", () => {
    render(<WelcomeMessage isLoggedIn />);
    const message = screen.getByText(/Welcome back, user!/i);
    expect(message).toBeInTheDocument();
  });
  test("should render no logged content", () => {
    render(<WelcomeMessage />);
    const message = screen.getByText(/Please log in to continue./i);
    expect(message).toBeInTheDocument();
  });
});
