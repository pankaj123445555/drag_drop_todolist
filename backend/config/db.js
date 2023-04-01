const mongoose = require('mongoose')
const uri = ''

const connectDb = async ()=>{
   
    try {
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log(`database is connected successfully`);
    }
    catch(err)
    {
        console.log(`error occured while connecting the database`);
    }
}

module.exports = {connectDb};