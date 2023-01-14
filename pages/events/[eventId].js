import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventPage = () => {
    const {query} = useRouter()

    const event = getEventById(query.eventId)

    if (!event) {
        return <p>No event was found</p>
    }
    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics image={event.image}
                            imageAlt={event.title}
                            address={event.location}
                            date={event.date}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventPage;
