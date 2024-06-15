const mongoose = require('mongoose');
const URL = process.env.MONGO_URL || 'mongodb+srv://coolsummer113:minhnhan911@cluster0.fcjyhtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
        console.table([error]);
    }
}

module.exports = {db}