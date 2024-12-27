import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Greeting from "../src/07-react-component";

describe("First React component", () => {
  test("displays the initial greeting message", () => {
    render(<Greeting name="John" />);

    const greetingMessage = screen.getByText(/Hello, John!/i);
    expect(greetingMessage).toBeInTheDocument();
  });

  test("changes greeting message when button is clicked", () => {
    render(<Greeting name="John" />);

    const button = screen.getByText(/Change Message/i);
    fireEvent.click(button);

    const updatedMessage = screen.getByText(/Goodbye, John!/i);
    expect(updatedMessage).toBeInTheDocument();
  });
});
