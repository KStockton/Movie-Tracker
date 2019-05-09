const fetchConfig = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});
const postUsers = async (url, method, body) => {
  const response = await fetch(
    `http://localhost:3000/api/${url}`,
    fetchConfig(method, body)
  );
  return await response.json();
};
export { postUsers, fetchConfig };
