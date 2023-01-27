import {connectDatabase, insertDocument} from "../../../helpers/db-util";

async function  handler(req, res) {
    const commentId = req.query.commentId
    if(req.method === 'POST'){
        const { email, name, text} = req.body
        if(!email.includes('@') || !name.trim() || !text.trim()){
            res.status(422).json({message: 'Invalid input.'})
            return
        }
        const newComment = {
            email,
            name,
            text,
            commentId
        }
        let client
        try {
            client = await  connectDatabase()
        } catch (error){
            res.status(500).json({message: 'Connection failed'})
            return
        }
        try {
            await insertDocument(client, 'comments', newComment)
            await  client.close()
        } catch (error) {
            res.status(500).json({message: 'Something went wrong'})
            return
        }

        res.status(201).json({message: 'Added comment.', comment: newComment})
    }

}

export default handler;