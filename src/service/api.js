import axios from "axios";

export const BASE_URL = "http://localhost:4000";

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response);
    throw error;
  }
}

export async function signup({ email, password, phone, firstName, lastName }) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, {
      email,
      password,
      phone,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response);
    throw error;
  }
}

export async function fetchUser(id, token) {
  const response = await axios.get(`${BASE_URL}/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function fetchUsers(token) {
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function fetchListing(listingId, token) {
  const response = await axios.get(`${BASE_URL}/listings/${listingId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function fetchAllListings(token, q, c) {
  let url = `${BASE_URL}/listings`;
  if (q || c) {
    url += "?";
    if (q) url += `q=${q}&`;
    if (c) url += `c=${c}&`;
    url = url.slice(0, -1); // Remove "&" character
  }
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function putListing(
  { title, description, price, sold, address, city, postcode },
  listingId,
  token
) {
  try {
    const response = await axios.put(
      `${BASE_URL}/listings/${listingId}`,
      {
        title,
        description,
        price,
        sold,
        address,
        city,
        postcode,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating listing [${listingId}]: `, error.response);
    throw error;
  }
}

export async function createListing(listingData, token) {
  const response = await axios.post(`${BASE_URL}/listings`, listingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteListing(id, token) {
  const response = await axios.delete(`${BASE_URL}/listings/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateUserSettings(id, token, userData) {
  const response = await axios.put(`${BASE_URL}/users/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
