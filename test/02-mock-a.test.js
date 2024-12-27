import { fetchData } from "../src/02-mock-a";

describe("async function mock a", () => {
  test("should return data", async () => {
    const data = await fetchData(1);
    expect(data).toEqual({ id: 1, name: "John Doe" });
  });
});
