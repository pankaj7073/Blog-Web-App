import mongoose from 'mongoose';

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;


const Connection = async () => {
    const URL = `mongodb+srv://${user}:${pass}@cluster0.qqp1jyb.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;