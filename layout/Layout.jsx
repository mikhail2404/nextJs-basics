import MainHeader from "./MainHeader";
import Notification from "../shared/Notification/Notification";
import {useContext} from "react";
import NotificationContext from "../store/notificationContext";

const Layout = ({children}) => {
    const {notification: activeNotification} = useContext(NotificationContext)
    return (
        <>
            <MainHeader />
            <main>
                {children}
                {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />}
            </main>
        </>
    );
};

export default Layout;
