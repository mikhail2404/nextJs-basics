import styles from "./eventItem.module.css"
import Button from "../../../../shared/Button/Button";
import DateIcon from "../../../../shared/DateIcon/DateIcon";
import AddressIcon from "../../../../shared/AddressIcon/AddressIcon";
import ArrowRightIcon from "../../../../shared/ArrowRightIcon/ArrowRightIcon";
import Image from "next/image";
const EventItem = ({image, title, date, location, id}) => {

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const formattedAddress = location.replace(', ', '\n')

    return (
        <li className={styles.item}>
            <Image src={`/${image}`} alt={title} width={250} height={160}/>
            <div className={styles.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.address}>
                    <Button link={`/events/${id}`}>
                       <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
