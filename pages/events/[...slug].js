import {useRouter} from "next/router";
import EventList from "../../components/EventList/EventList";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../shared/Button/Button";
import ErrorAlert from "../../shared/ErrorAlert/ErrorAlert";
import {getFilteredEvents} from "../../api/getFilteredEvents";

const SpecificDateEvent = ({filteredEvents, date}) => {
    // const {query} =  useRouter()
    // const filterData = query.slug
    // if(!filterData){
    //     return <p className="center">Loading...</p>
    // }
    // const [year, month] = filterData
    //
    // const numYear = +year
    // const numMonth =  +month
    // if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
    //     return <>
    //         <ErrorAlert> Invalid filter. Please adjust your values</ErrorAlert>
    //         <div className="center">
    //             <Button link="/events">Show All Events</Button>
    //         </div>
    //     </>
    // }
    console.log({filteredEvents})
    if(!filteredEvents || !filteredEvents.length){
        return <>
            <ErrorAlert>No events was found for the chosen filters</ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const formattedDate = new Date(date.year, date.month)
    return (
        <div>
            <ResultsTitle date={formattedDate}/>
            <EventList events={filteredEvents}/>
        </div>
    );
};

export async function  getServerSideProps({params}) {
    const {slug: filterData} = params
    const [year, month] = filterData

    const numYear = +year
    const numMonth =  +month
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return {notFound: true}
    }
    const filteredEvents =  await getFilteredEvents({year: numYear, month: numMonth})

    return {
        props: {filteredEvents, date: {year, month}}
    }
}

export default SpecificDateEvent;
