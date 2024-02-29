import mongoose from "mongoose";
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [4, "first name must contain 4 character"],
        maxLength: [30, "first name must not exceed 30ccharacter"]
    },

    lastName: {

        type: String,
        required: true,
        minLength: [4, "first name must contain 4 character"],
        maxLength: [30, "first name must not exceed 30ccharacter"]

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"]
    },
    phone: {

        type: String,
        required: true,
        minLength: [10, "first name must contain 4 character"],
        maxLength: [10, "first name must not exceed 30ccharacter"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }

})

export const Reservation = mongoose.model("Reservation", reservationSchema)