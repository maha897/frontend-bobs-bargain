import axios from "axios";
const BASE_URL = "https://nominatim.openstreetmap.org/search";

export async function lookupAddress(address) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: address,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
