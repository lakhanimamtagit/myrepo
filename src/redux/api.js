import axios from "axios";

export const loadUsersApi = async () =>
  await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_API_KEY}`);

  export const loadArticleApi = async (category) =>
  await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${process.env.REACT_APP_API_KEY}`);

export const createUserApi = async (user) =>
  await axios.post(`http://localhost:5000/users`, user);

export const deleteUserApi = async (id) =>
  await axios.delete(`http://localhost:5000/users/${id}`);

export const updateUserApi = async (id, user) =>
  await axios.put(`http://localhost:5000/users/${id}`, user);
