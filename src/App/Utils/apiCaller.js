export default (url, method, data) =>
  fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  }).then((response) => response.json())
