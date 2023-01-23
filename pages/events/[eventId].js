import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import {getEvent} from "../../api/getEvent";
import {getFeaturedEvents} from "../../api/getFeaturedEvents";
import Head from "next/head";

const EventPage = ({event }) => {


    if (!event) {
        return <p className="center">Loading</p>
    }
    return (
        <>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
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

export async  function getStaticProps({params}) {
    const {eventId }  = params
    const event = await getEvent(eventId)
    return {props: {event}, revalidate: 30}
}

export async function getStaticPaths() {
    const events  = await getFeaturedEvents()
    const paths = events.map(event => ({params: {eventId: event.id}}))
    return {
        paths,
        fallback: true
    }
}

export default EventPage;
