export async function fetchRecommended() {
  try {
    const res = await fetch("/data/recommended.json");
    return await res.json();
  } catch (error) {
    console.error("Error loading recommended.json:", error);
    return [];
  }
}

export async function fetchUpcoming() {
  try {
    const res = await fetch("/data/upcoming.json");
    return await res.json();
  } catch (error) {
    console.error("Error loading upcoming.json:", error);
    return [];
  }
}
