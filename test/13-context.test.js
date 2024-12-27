import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../src/13-context";

function TestComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

test("should provide default theme as light", () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  expect(screen.getByTestId("theme").textContent).toBe("light");
});

test("should toggle theme between light and dark", () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  const button = screen.getByRole("button", { name: /toggle theme/i });

  fireEvent.click(button);
  expect(screen.getByTestId("theme").textContent).toBe("dark");

  fireEvent.click(button);
  expect(screen.getByTestId("theme").textContent).toBe("light");
});
