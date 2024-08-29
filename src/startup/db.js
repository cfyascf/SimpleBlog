import mongoose from 'mongoose';
import 'dotenv/config'

const connectDb = () => {
    const db = process.env.CONNECTION_STRING;
    
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`connected to ${db}.`))
        .catch((error) => console.log('error running server.'))
}

export default connectDb