import axios from 'axios';

export const goodsAPI = axios.create({
  baseURL: process.env.API_URL,
});
