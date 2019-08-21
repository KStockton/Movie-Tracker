const settings = (method, body) => ({
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
})
const fetchUser = async (url) => {
    const response = await fetch('https://movie-tracker-fe.herokuapp.com/api/')
}