const {default:mongoose} = require("mongoose");

async function getConnection(){
    await mongoose.connect('mongodb+srv://shiva:shiva@cluster0.fyvspec.mongodb.net/?retryWrites=true&w=majority');
};

module.exports = getConnection;