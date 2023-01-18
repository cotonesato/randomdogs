export async function fetchImages() {
    const response = await fetch(
        `https://http.cat/random`
    );
    const data = await response.json();
    return data.message;
  }
