import axios from "axios";

export const BASE_URL = "http://localhost:4000";

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
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
    const userData = response;
    return userData;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}

export async function fetchUser(id, token) {
  const response = await axios.get(`${BASE_URL}/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}

export async function fetchUsers(token) {
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function fetchAllListings(token) {
  const response = await axios.get(`${BASE_URL}/listings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateUserSettings(id, token, userData) {
  const response = await axios.put(`${BASE_URL}/users/${id}`, userData,  {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}