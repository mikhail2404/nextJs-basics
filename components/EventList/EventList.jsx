import EventItem from "./components/EventItem/EventItem";
import styles from "./eventList.module.css"
const EventList = ({events}) => {
    return (
        <ul className={styles.list}>
            {events.map(event => (
                <EventItem
                    key={event.id}
                    image={event.image}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    id={event.id}/>
                )
            )}
        </ul>
    );
};

export default EventList;
