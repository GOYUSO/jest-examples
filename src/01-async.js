export async function fetchData(id) {
  if (!id) {
    throw new Error("ID is required");
  }

  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "John Doe" });
    }, 500);
  });
}
