import EventList from "../components/EventList/EventList";
import {getFeaturedEvents} from "../api/getFeaturedEvents";

const HomePage = ({events}) => {
    return (
        <div>
            <EventList events={events}/>
        </div>
    );
};


export async  function getStaticProps() {
   const data = await getFeaturedEvents()
    return {props: {events: data}, revalidate: 1800}
}

export default HomePage;
