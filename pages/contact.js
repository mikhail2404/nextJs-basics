import ContactForm from "../components/Posts/components/ContactForm/ContactForm";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your messages" />
            </Head>
            <ContactForm />
        </>
    )
};

export default ContactPage;
