import mongoose  from "mongoose";
const namesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
      lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
   

})
const Name = mongoose.model('Name', namesSchema);
export default Name