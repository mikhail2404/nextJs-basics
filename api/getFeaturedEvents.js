export const  getFeaturedEvents = async () => {
    const response = await fetch('https://next-js-bca96-default-rtdb.firebaseio.com/events.json')
    const data = await response.json()
    const transformedData = Object.entries(data).map(sale => ({...sale[1], id: sale[0]}))
    return transformedData.filter((event) => event.isFeatured);
}