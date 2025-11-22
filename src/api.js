import axios from 'axios'

// Replace this with your ngrok HTTPS URL, e.g.:
// const BASE_URL = 'https://abcd1234.ngrok-free.app/api/products'
const BASE_URL = 'unsufferably-exceedable-greta.ngrok-free.dev'

export const API = axios.create({
  baseURL: BASE_URL,
})
