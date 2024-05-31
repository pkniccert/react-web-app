import fetchInstance from "../apiInstances/fetchInstance";
import withoutTokenInstance from "../apiInstances/withoutTokenInstance";

export const login = async (email, password) => {
  return withoutTokenInstance.post('/login', { email, password });
};

export const validateToken = async () => {
  return fetchInstance.get('/validate-token');
};

export const getUsersData = async () => {
  return fetchInstance.get('/getUser');
};

export const signup = async (first_name, last_name, email, password) => {
  return withoutTokenInstance.post('/register', { first_name, last_name, email, password });
};

export const logout = async () => {
  return fetchInstance.get('/logout');
};