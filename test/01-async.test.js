import { fetchData } from "../src/01-async";

describe("async function", () => {
  test("should return data if ID is assigned", async () => {
    const data = await fetchData(1);
    expect(data).toEqual({ id: 1, name: "John Doe" });
  });
  test("should return an error if no ID is provided", () => {
    expect(fetchData()).rejects.toThrow("ID is required");
  });
});
