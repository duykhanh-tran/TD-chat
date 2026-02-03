import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true ,
        unique : true , 
        trim : true , 
        lowercase : true ,
    },
    hashedPassword : {
        type : String ,
        required : true , 
    }, 
    email : {
        type : String , 
        required : true ,
        unique : true , 
        trim : true , 
        lowercase : true ,
    },
    displayName : { // Ten hien thi cua nguoi dung 
        type : String , 
        required : true ,
        trim : true , 
    },
    avatarUrl : {
        type : String , 
    },
    avatarId : {
        type : String , // Cloudinary public_id de xoa hinh 
    },
    bio : {
        type : String , 
        maxlength : 500 ,
    },
    phone : {
        type : String , 
        sparse : true , // Cho pheo gia tri null nhung khong duoc trung 
    },
},
{
    timestamps : true ,
}
);

const User = mongoose.model("User" , userSchema);

export default User ;
