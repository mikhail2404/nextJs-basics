import {MongoClient} from "mongodb";
import {connectDatabase, getAllDocuments} from "../../../helpers/db-util";

async function  handler(req, res) {
    if(req.method === 'GET'){
        let client
        let comments
        try {
            client = await connectDatabase()
        }
        catch (error){
            res.status(500).json({message: 'Connecting to the database failed'})
            return
        }
        try {
            comments = await getAllDocuments(client, 'comments')
            await  client.close()
        } catch (error){
            res.status(500).json({message: 'Inserting data failed'})
            return
        }
        res.status(200).json({comments})
    }
}

export  default  handler;