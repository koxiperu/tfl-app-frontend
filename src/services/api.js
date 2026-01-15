const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  //const token = sessionStorage.getItem("tfl_token");

  try {
    const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          //...(token && { Authorization: `Bearer ${token}` }),
          ...options.headers,
        },
    });
    if (!response.ok) {
      throw new Error("Error: "+response.status);       
    }
    const text = await response.text();
    return text ? JSON.parse(text) : null;
    } catch (error) {
    console.error('API request failed: '+ error);
    throw error;
  }
};

// API methods for listings
export const listingsAPI = {
    getAll: () => apiFetch('/listings'),
    getById: (id) => apiFetch(`/listings/${id}`),
    create: (data, token) => apiFetch('/listings', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    update: (id, data) => apiFetch(`/listings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id, token) => apiFetch(`/listings/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
};

export const authAPI = {
    login: (credentials) => apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    }),
    register: (data) => apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data)
    }),
};
