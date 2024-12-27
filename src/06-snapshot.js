export function getUserProfile() {
  return {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
    createdAt: new Date(2024, 11, 24).toISOString(),
  };
}
