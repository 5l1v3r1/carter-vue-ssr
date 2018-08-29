import axios from 'axios';

let instance;

export function getClient() {
  if (!instance) {
    instance = axios.create();
    instance.server = false;
  }
  return instance;
}
