const mongooose=require("mongoose")


const bookSchema=new mongooose.Schema({
    customerId:{
        type:mongooose.Schema.Types.ObjectId,
        ref:"customers"
    },
    groundId:{
        type:mongooose.Schema.Types.ObjectId,
        ref:"grounds"
    },
    date:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    timeFrom:{
        type:String,
        required:true
    },
    timeTo:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const Book=mongooose.model("books",bookSchema);

module.exports=Book;