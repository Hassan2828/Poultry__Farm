import mongoose, {modelNames} from "mongoose";
const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    mobile : {
        type : Number
    }
})

export const UserModel = mongoose.model("users", UserSchema);