import {getEvents} from "./getEvents";

export const getFilteredEvents = async  (dateFilter) => {
    const events = await  getEvents()
    const { year, month } = dateFilter;

    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}