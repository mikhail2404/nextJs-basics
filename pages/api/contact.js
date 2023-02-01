import {MongoClient} from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message} =  req.body

        if(!email || !email.includes('@') ||  name.trim() === '' || message.trim() === '' ) {
            return res.status(422).json({message: 'Invalid input'})
        }

        const newMessage = {
            email,
            name,
            message
        }

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.qyifrl0.mongodb.net/${process.env.mongodb_database_name}?retryWrites=true&w=majority`
        try {
             client = await MongoClient.connect(connectionString)

        } catch (error) {
            res.status(500).json({message: 'Could not connect ot database.'})
        }

        const db = client.db()
        try {
            const result = await  db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
           await client.close()
            res.status(500).json({message: 'Failed to insert data'})
        }

        await  client.close()
        res.status(201).json({message: 'Success'})
    }
}

export default handler;