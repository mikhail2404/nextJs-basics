import classes from './contact-form.module.css'
import {useEffect, useState} from "react";
import Notification from "../../../ui/Notification";
const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setErrorMessage('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])
    const sendMessageHandler = async  (event) => {
        event.preventDefault();
        setRequestStatus('pending')
        const response =  await  fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({email, name, message}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        try{
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.message || 'Something went wrong!')
            }
            setRequestStatus('success')
            setEmail('')
            setName('')
            setMessage('')
        } catch (error){
            setRequestStatus('error')
            setErrorMessage(error.message)
        }
    }

    let notification;

    if(requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'You message is on its way!'
        }
    }


    if(requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success',
            message: 'Message sent successfully!!!'
        }
    }

    if(requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: errorMessage
        }
    }
    return (
        <section className={classes.contact}>
            <h1>How cam I help you</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" required/>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows={5}/>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        </section>
    );
};

export default ContactForm;
