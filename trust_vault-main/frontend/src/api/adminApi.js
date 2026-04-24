import axios from "axios"

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/admin`
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  const userStr = localStorage.getItem("user")
  if (userStr) {
    const user = JSON.parse(userStr)
    if (user.email) {
      config.headers["x-user-email"] = user.email.toLowerCase()
    }
  }
  return config
})

export default api