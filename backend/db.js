const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes').then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});
// module.exports=datatoconnect