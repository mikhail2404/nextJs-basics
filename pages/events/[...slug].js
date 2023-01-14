import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/EventList/EventList";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../shared/Button/Button";
import ErrorAlert from "../../shared/ErrorAlert/ErrorAlert";

const SpecificDateEvent = () => {
    const {query} =  useRouter()
    const filterData = query.slug
    if(!filterData){
        return <p className="center">Loading...</p>
    }

    const [year, month] = filterData

    const numYear = +year
    const numMonth =  +month
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return <>
            <ErrorAlert> Invalid filter. Please adjust your values</ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const filteredEvents =  getFilteredEvents({year: numYear, month: numMonth})
    console.log({filteredEvents})
    if(!filteredEvents || !filteredEvents.length){
        return <>
            <ErrorAlert>No events was found for the chosen filters</ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const date = new Date(numYear, numMonth - 1)
    return (
        <div>
            <ResultsTitle date={date}/>
            <EventList events={filteredEvents}/>
        </div>
    );
};

export default SpecificDateEvent;
