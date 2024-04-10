import { Schema, model } from "mongoose";

const userSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        pfp: {
            type: String,
            required: false
        }
    },

    {
        collection: "users"
    }
)

export default model("User", userSchema);
