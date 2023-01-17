import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/EventList/EventList";

const HomePage = ({events}) => {
    const featuredEvents = getFeaturedEvents(events)
    return (
        <div>
            <EventList events={featuredEvents}/>
        </div>
    );
};


export async  function getStaticProps() {
    const response = await fetch('https://next-js-bca96-default-rtdb.firebaseio.com/events.json')
    const data = response.json()
    return {props: {events: data}}
}

export default HomePage;
