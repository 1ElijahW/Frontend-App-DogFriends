import axios from 'axios'

const LOCALSTORAGE_KEY = 'token'

const api = axios.create({
  baseURL: 'https://dog-friends-backend-40a099a23239.herokuapp.com/api/posts',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api
