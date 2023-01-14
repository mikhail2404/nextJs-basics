import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/EventList/EventList";

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <EventList events={featuredEvents}/>
        </div>
    );
};

export default HomePage;
