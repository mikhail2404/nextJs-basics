import EventList from "../components/EventList/EventList";
import {getFeaturedEvents} from "../api/getFeaturedEvents";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = ({events}) => {
    return (
        <div>
            <Head>
                <title>NextJs Events</title>
            </Head>
            <NewsletterRegistration />
            <EventList events={events}/>
        </div>
    );
};


export async  function getStaticProps() {
   const data = await getFeaturedEvents()
    return {props: {events: data}, revalidate: 1800}
}

export default HomePage;
