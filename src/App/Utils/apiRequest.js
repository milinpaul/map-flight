export default (url, method) =>
  fetch(url, {
    method
  })
    .then((response) => response)
    .catch((error) => error)
