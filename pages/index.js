import {useRef, useState} from "react";

const HomePage = () => {
    const [feedbackItems, setFeedbackItems] = useState([])
    const emailInputRef = useRef()
    const feedBackRef = useRef()

    const submitFormHandler= (e) => {
        e.preventDefault()


        const enteredEmail = emailInputRef.current.value
        const enteredFeedback = feedBackRef.current.value

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({email: enteredEmail, feedback: enteredFeedback}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const loadFeedbackHandler = () => {
        fetch('/api/feedback')
            .then(response => response.json())
            .then(data => setFeedbackItems(data.feedback))
    }
    return (
        <div>
            HomePage
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Your Email Address</label>
                    <input ref={emailInputRef} type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea ref={feedBackRef} rows="5" id="feedback"/>
                </div>
                <button>Send feedback</button>
            </form>
            <hr />
            <button onClick={loadFeedbackHandler}>Load Feedback</button>
            <ul>
                {feedbackItems.map(item => <li key={item.id}>{item.feedback}</li>)}
            </ul>
        </div>
    );
};

export default HomePage;
