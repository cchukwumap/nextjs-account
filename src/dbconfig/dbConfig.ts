import mongoose from "mongoose";

export default async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected to database")
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + error);
            process.exit();
        })

    }
    catch(error){
        console.log("Error connecting to database")
        console.log(error)
    }
}