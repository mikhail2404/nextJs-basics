import {connectDatabase, insertDocument} from "../../helpers/db-util";

async function handler(req, res) {
    if(req.method === 'POST'){
       const userEmail =  req.body.email
        if(!userEmail || !userEmail.includes('@')) {
            res.status(422).json({message: 'Invalid email address.'})
            return
        }
        let client
        try{
            client = await connectDatabase()
        }catch (error){
            res.status(500).json({message: 'Connection failed'})
            return
        }
        try {
            await insertDocument(client, 'emails', {email: userEmail})
            await  client.close()

        } catch (error){
            res.status(500).json({message: 'Something went wrong'})
        }
        res.status(201).json({message: 'Signed up!'})
    }
}

export default handler;