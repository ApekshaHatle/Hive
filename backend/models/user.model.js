import mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        fullName:{
            type: String,
            required:true,    
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,    //reference to user model
                ref: 'User',
                default: ""       //initially 0 followers
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,    //reference to user model
                ref: 'User',
                default: ""       //initially 0 followers
            },
        ],
        
        profileImg:{
            type: String,
            default: "",
        },

        coverImg: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            default: "",
        },
        link: {
            type: String,
            default: "",
        },

    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);  //users

export default User;
