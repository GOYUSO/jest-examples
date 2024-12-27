import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import UserProfile from "../src/10-api-component";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ name: "John Doe", email: "john.doe@example.com" }),
  })
);

describe("api component", () => {
  test("should show name and email", async () => {
    render(<UserProfile userId={1} />);
    expect(fetch).toHaveBeenCalled();

    const loadingMsg = screen.getByText(/Loading.../i);
    expect(loadingMsg).toBeInTheDocument();

    await waitFor(() => screen.findByText(/John Doe/i));

    const name = screen.getByText(/John Doe/i);
    const email = screen.getByText(/john.doe@example.com/i);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
