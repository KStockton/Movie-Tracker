const postUsers = async (path, method, body) => {
  const url = `https://movietracker-api.herokuapp.com/${path}`
  const options = 
  {
    method,
    headers: { "Content-Type": "application/json" },
    mode: 'cors',
    body: JSON.stringify(body)
  }
  const response = await fetch(url,options)
  const result = await response.json();
  
  return result;
};
export { postUsers };
