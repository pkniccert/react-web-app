import fetchInstance from "../apiInstances/fetchInstance";

export const login = async (email, password) => {
  return fetchInstance.post('/login', { email, password });
};

export const validateToken = async () => {
  return fetchInstance.get('/validate-token');
};

export const logout = async () => {
  return fetchInstance.get('/logout');
};