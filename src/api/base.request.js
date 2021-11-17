import axios from 'axios';

import Env from '../config/env-config';

const baseURL = Env.API_URL;
const timeout = Env.API_TIMEOUT;

const API = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout,
});

export { API };
