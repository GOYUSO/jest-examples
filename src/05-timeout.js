export async function retryOperation(operation, retries, delay) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw new Error(`Operation failed after ${retries} retries`);
      }
    }
  }
}
