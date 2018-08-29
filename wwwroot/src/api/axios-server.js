import axios from 'axios';

let instance;

export function getClient() {
  if (!instance) {
    instance = axios.create({ baseURL: 'http://localhost:5000' });
    instance.server = true;
  }
  return instance;
}
