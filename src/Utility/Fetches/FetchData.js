export const fetchData = async url => {
  let response = await fetch(url);
  if(!response.ok){
    throw Error('Error retrieving data')
  }
  return await response.json();
};
