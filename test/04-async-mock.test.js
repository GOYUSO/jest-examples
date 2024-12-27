import { fetchUserData } from "../src/04-async-mock";

global.fetch = jest.fn(); // Mock global fetch

describe("fetchUserData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchUserData returns data when fetch is successful", async () => {
    const mockResponse = { id: 1, name: "John Doe" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await fetchUserData(1);

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    expect(data).toEqual(mockResponse);
  });

  test("fetchUserData throws an error when response is not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchUserData(2)).rejects.toThrow("Failed to fetch user data");
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/2"
    );
  });
});
