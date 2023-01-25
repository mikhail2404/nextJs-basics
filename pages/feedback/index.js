import {buildPath, extractFeedback} from "../api/feedback";
import {useState} from "react";

const FeedbackPage = ({feedbackItems}) => {
    const [feedbackData, setFeedbackData] = useState()
    const loadFeedbackHandler = (id) => {
        fetch('/api/feedback/' + id)
            .then(response => response.json())
            .then(data => {
                console.log({data})
                setFeedbackData(data.feedback)
            })
    }
    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {feedbackItems.map(item => (
                    <li key={item.id}>
                        {item.feedback}
                        <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Detail</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export async function getStaticProps() {
    const filePath = buildPath()
    const data = extractFeedback(filePath)
    return {
        props: {
            feedbackItems: data
        }
    }
}
export default FeedbackPage;
