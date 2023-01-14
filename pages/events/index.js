import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/EventList/EventList";
import EventSearch from "../../components/EventSearch/EventSearch";
import {useRouter} from "next/router";

const EventsPage = () => {
    const {push} = useRouter()
    const events = getAllEvents()

    const findEventsHandler = (year, month) => {
        push(`/events/${year}/${month}`)
    }
    return (
        <>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList events={events}/>
        </>
    );
};

export default EventsPage;
