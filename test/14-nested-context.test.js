import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../src/13-context";
import { AuthProvider, useAuth } from "../src/14-nested-context";

function TestComponent() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="user">{user ? user.name : "Guest"}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => login("John")}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

test("should handle multiple contexts", () => {
  render(
    <AuthProvider>
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    </AuthProvider>
  );

  expect(screen.getByTestId("theme").textContent).toBe("light");
  expect(screen.getByTestId("user").textContent).toBe("Guest");

  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByTestId("user").textContent).toBe("John");

  fireEvent.click(screen.getByText("Toggle Theme"));
  expect(screen.getByTestId("theme").textContent).toBe("dark");

  fireEvent.click(screen.getByText("Logout"));
  expect(screen.getByTestId("user").textContent).toBe("Guest");
});
