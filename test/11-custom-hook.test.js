import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../src/11-custom-hook";

describe("custom hook", () => {
  test("should have initial default value 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("should have initial value 5", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  test("should increment properly", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });

  test("should decrement properly", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  test("should work with negative numbers", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
