const fetchConfig = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});
const postUsers = async (url, method, body) => {
  const response = await fetch(
    `https://movie-tracker-api.herokuapp.com/${url}`,
    fetchConfig(method, body)
  );
  const result = await response.json();
  return result;
};
export { postUsers, fetchConfig };
