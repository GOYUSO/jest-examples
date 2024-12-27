import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchForm from "../src/08-form";

describe("form component", () => {
  test("renders input and button", () => {
    render(<SearchForm onSearch={jest.fn()} />);

    const input = screen.getByPlaceholderText(/Search.../i);
    const button = screen.getByText(/Search/i);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls onSearch with the input value when submitted", () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(/Search.../i);
    const button = screen.getByText(/Search/i);

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("React");
  });
});
