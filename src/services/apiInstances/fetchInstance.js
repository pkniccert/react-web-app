// src/api/fetchInstance.js
const API_BASE_URL = 'http://127.0.0.1:3200/api'; // FastAPI backend URL

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      window.location.href = '/login';
    }
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

const fetchInstance = {
  get: async (url) => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getAuthToken(),
      },
    });
    return handleResponse(response);
  },
  post: async (url, data) => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getAuthToken(),
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
  // Add more methods (put, delete) as needed
};

export default fetchInstance;