const getToken = key => {
  return localStorage.getItem(key)
}

const setToken = (key, value) => {
  return localStorage.setItem(key, value)
}

export {getToken, setToken}
