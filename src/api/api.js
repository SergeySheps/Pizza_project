const fetchWrapper = (address, options) => {
  return fetch(address, options)
}

const postRequestWithToken = (address, data) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(data),
  }

  return fetchWrapper(address, requestOptions)
}

const postRequestWithoutToken = (address, data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  return fetchWrapper(address, requestOptions)
}

export default {
  postRequestWithToken,
  postRequestWithoutToken,
}
