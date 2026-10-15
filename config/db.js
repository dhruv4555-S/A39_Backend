import mongoose from "mongoose";

const connectDb = async () => {
    // try {
    //     const conn = await mongoose.connect(process.env.MONGODB_URI)
    //     console.log(`connected success fully:${conn.connection.host}`)

    // } catch(error){
    //     console.log(`connection error:${error.message}`)
    // }

    try{
        const uri = process.env.USE_PROXY === 'true'
         ? process.env.MONGODB_URI_PROXY
         : process.env.MONGODB_URI

        const conn = await mongoose.connect(uri)
        console.log(`database connect successfully host:${conn.connection.host}`)
    }catch(error){
        console.log(`Connection Error::${error.message}`)
    }
}

export default connectDb