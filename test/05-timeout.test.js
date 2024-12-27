import { retryOperation } from "../src/05-timeout";

describe("retryOperation", () => {
  test("retries the operation the correct number of times", async () => {
    const mockOperation = jest
      .fn()
      .mockRejectedValueOnce(new Error("Fail on 1st attempt"))
      .mockRejectedValueOnce(new Error("Fail on 2nd attempt"))
      .mockResolvedValue("Success on 3rd attempt");

    const result = await retryOperation(mockOperation, 3, 1000);

    expect(result).toBe("Success on 3rd attempt");
    expect(mockOperation).toHaveBeenCalledTimes(3);
  });
  test("retries the operation the correct number of times and throw an error the last attempt", async () => {
    const mockOperation = jest
      .fn()
      .mockRejectedValueOnce(new Error("Fail on 1st attempt"))
      .mockRejectedValueOnce(new Error("Fail on 2nd attempt"))
      .mockRejectedValueOnce(new Error("Fail on 3rd attempt"))
      .mockResolvedValueOnce(new Error("Fail on 4th attempt"));

    await expect(retryOperation(mockOperation, 3, 500)).rejects.toThrow(
      "Operation failed after 3 retries"
    );
    expect(mockOperation).toHaveBeenCalledTimes(3);
  });
});
