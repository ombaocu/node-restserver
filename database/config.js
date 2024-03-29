const mongoose = require('mongoose');


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }    
}


module.exports = {
    dbConnection
}