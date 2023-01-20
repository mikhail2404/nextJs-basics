import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/EventList/EventList";
import EventSearch from "../../components/EventSearch/EventSearch";
import {useRouter} from "next/router";
import {getEvents} from "../../api/getEvents";

const EventsPage = ({events}) => {
    const {push} = useRouter()

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

export  async  function getStaticProps() {
    const data = await getEvents()
    return {props: {events:  data}, revalidate: 60}
}

export default EventsPage;
