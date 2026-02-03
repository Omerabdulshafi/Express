import mongoose from "mongoose";
const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
});

export default mongoose.model('register', registerSchema);
