import mongoose from 'mongoose';

//Each Post will have to have these things 
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String }
});

export default mongoose.model("User", userSchema);