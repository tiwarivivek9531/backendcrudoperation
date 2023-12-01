const mongoose=require('mongoose');
mongoose.promise=global.promise;

const db={};
db.mongoose=mongoose;
module.exports=db;