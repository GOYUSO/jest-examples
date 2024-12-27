import { fetchData } from "../src/02-mock-a";
import { sendMessage } from "../src/02-mock-b";

jest.mock("../src/02-mock-a");

describe("async function", () => {
  test("should return data if ID is assigned", () => {
    fetchData.mockImplementation((id) => ({ id, name: "Mocked name" }));
    expect(fetchData(1)).toEqual({ id: 1, name: "Mocked name" });
  });

  test("should call service.deliver with Hello world", () => {
    const mockService = { deliver: jest.fn() };
    sendMessage(mockService, "Hello world");
    expect(mockService.deliver).toHaveBeenCalled();
    expect(mockService.deliver).toHaveBeenCalledWith("Hello world");
  });
});
