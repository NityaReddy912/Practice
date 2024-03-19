const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/microserviceDemoDB',{
}).then(() =>{
    console.log('Connection Successful!');
}).catch((err) =>{
    console.error('Connection failed! '+err);
})
