// src/api.js

const API_URL = 'http://localhost:5000/api'; // Update this URL if your backend is deployed

// Utility function to handle API requests
const request = async (url, options) => {
  try {
    const response = await fetch(`${API_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Authentication API
export const registerUser = (userData) => {
  return request('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return request('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
};

// FAQ API
export const getFaqs = () => {
  return request('/faqs', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
};

export const createFaq = (faqData) => {
  return request('/faqs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faqData),
  });
};

export const updateFaq = (id, faqData) => {
  return request(`/faqs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faqData),
  });
};

export const deleteFaq = (id) => {
  return request(`/faqs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};
