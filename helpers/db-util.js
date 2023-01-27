import {MongoClient} from "mongodb";

export const  connectDatabase = async () =>  {
   const  client = await MongoClient.connect('mongodb+srv://mikhailmaliar21:ihMC21azx@cluster0.qyifrl0.mongodb.net/?retryWrites=true&w=majority')
    return client
}

export const insertDocument = async (client, collection,  document) => {
    const db = client.db()
    await db.collection(collection).insertOne(document)
}


export const getAllDocuments = async (client, collection) => {
    const db = client.db()
    const documents  = await db.collection(collection).find().toArray()
    return documents
}
