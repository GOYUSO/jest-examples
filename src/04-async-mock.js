export async function fetchUserData(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}
