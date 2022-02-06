import mongoose from 'mongoose';

const accountsSchema = mongoose.Schema({
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

var accountsMessage = mongoose.model('accountsMessage', accountsSchema);

export default accountsMessage;