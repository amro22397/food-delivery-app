import { Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: stringify,
        required: true,
        unique: true
    },

    password: {
        type: stringify,
        required: true,
        validate: pass => {
            if(!pass?.length || pass.length < 5) {
                new Error('password must be at least 5 characters')
            }
        },
    },
}, { timestamps: true })

export const User = model?.User || model('User', UserSchema);