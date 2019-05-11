const fetchConfig = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});
const postUsers = async (url, method, body) => {
  console.log('url:',url, 'method:',method, 'body:', body)
  const response = await fetch(
    `http://localhost:3000/api/${url}`,
    fetchConfig(method, body)
  );
  console.log('response',response)
  const result = await response.json();
  return result;
};
export { postUsers, fetchConfig };
