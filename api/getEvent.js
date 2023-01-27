export const  getEvent = async (id) => {
    const response = await fetch(`https://next-js-bca96-default-rtdb.firebaseio.com/events/${id}.json`)
    const data = await response.json()
    return data
}