import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "admin"
    }).then(() => {
        console.log("database connected sucessfully");
    }).catch(err => {
        console.log(`some error ${err}`);
    })
    
}