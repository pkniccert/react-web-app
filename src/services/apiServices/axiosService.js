import axiosInstance from './axiosInstance';

export const login = async (username, password) => {
  const response = await axiosInstance.post('/login', { username, password });
  return response.data;
};

export const validateToken = async () => {
  const response = await axiosInstance.get('/validate-token');
  return response.data;
};