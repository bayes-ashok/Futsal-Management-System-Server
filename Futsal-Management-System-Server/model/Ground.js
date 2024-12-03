const mongooose=require("mongoose")


const groundSchema=new mongooose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Ground=mongooose.model("grounds",groundSchema);

module.exports=Ground;