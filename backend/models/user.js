import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: { type: String, enum: ['user', 'manager', 'admin'], default: 'user'},
    profilePicture: { type: String }, //URL to the image
    resetPasswordToken: { type: String},
    resetPasswordExpires: { type: Date},
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String},
    verificationExpires: { type: Date},
    lastLogin: { type: Date}, 
    //Add other fields necessary
}, { timeStamps: true}); //automatically manage createdAt and updatedAt

const User = mongoose.model('User', UserSchema);
export default User;