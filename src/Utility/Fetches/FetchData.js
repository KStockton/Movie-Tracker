export async function fetchData(url){

 let response =  await fetch(url)
 let resolved = await response.json()

return resolved
}