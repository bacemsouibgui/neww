// importation mongoose pour connection l base de donnee
const mongoose=require("mongoose")
//config
const config=require("config")
//connectDB
const connectDB=()=>{
    mongoose.connect(config.get("MONGO_URI"))
    .then(()=>console.log("mongoose connected"))
    .catch((err)=>console.log(err))
}
module.exports=connectDB