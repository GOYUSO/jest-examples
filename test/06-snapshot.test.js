import { getUserProfile } from "../src/06-snapshot";

test("user profile matches the snapshot", () => {
  const userProfile = getUserProfile();
  expect(userProfile).toMatchSnapshot();
});
