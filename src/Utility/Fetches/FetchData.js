export const fetchData = async url => {
  let response = await fetch(url);
  let resolved = await response.json();
  return resolved
};

