import {buildPath, extractFeedback} from "./index";

function  handler(req, res) {
    const feedbackId = req.query.feedbackId
    const filePath = buildPath()
    const  feedbackData = extractFeedback(filePath)
    const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId)
    res.status(200).json({ feedback: selectedFeedback })
}

export default handler;