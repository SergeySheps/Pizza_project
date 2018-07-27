const getToken = () => {
  console.log(localStorage.getItem('token'))
  return localStorage.getItem('token')
}

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}

const postRequestWithoutToken = (url, data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

const getRequestWithoutToken = url => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(url, requestOptions).then(handleResponse)
}

const getRequestWithToken = url => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': getToken()
    }
  }

  return fetch(url, requestOptions).then(handleResponse)
}

const postRequestWithToken = (url, data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': getToken()
    },
    body: JSON.stringify(data)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

export default {
  postRequestWithToken,
  postRequestWithoutToken,
  getRequestWithoutToken,
  getRequestWithToken
}
