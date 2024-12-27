import * as logger from "../src/03-spy";
describe("spy function", () => {
  test("should spy properly logMessage", () => {
    const mySpy = jest.spyOn(logger, "logMessage");
    logger.logMessage("Hello spy!");
    expect(mySpy).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalledWith("Hello spy!");

    mySpy.mockRestore();
  });
});
