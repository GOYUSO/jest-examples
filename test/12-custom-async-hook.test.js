import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../src/12-custom-async-hook";

global.fetch = jest.fn();

describe("custom async hook", () => {
  test("should initialize with loading and no data", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ data: "Hello world" }),
    });

    const { result } = renderHook(() => useFetch("/data"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/data");
      expect(result.current.data).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.loading).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.data).toEqual({ data: "Hello world" });
      expect(result.current.error).toBeFalsy();
      expect(result.current.loading).toBe(false);
    });
  });

  test("should set error value when promise rejects", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    const { result } = renderHook(() => useFetch("/error"));

    await waitFor(() => {
      expect(result.current.error).toBe("Failed to fetch");
      expect(result.current.data).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });
});
