import ErrorHandler from "../error/error.js";
import { Reservation } from "../model/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body

    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return next(new ErrorHandler("PLease fill the form", 400))
    }

    try {

        await Reservation.create({
            firstName, lastName, email, date, time, phone
        })
        res.status(200).json({
            sucess: true,
            message: "reserved sucessfully"
        })
    }
    catch (error) {
        if (error.name === "validationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message)
            return next(new ErrorHandler(
                validationErrors.join(","), 400
            ))
        }
        return next(error)

    }
}

// import ErrorHandler from "../error/error.js";
// import { Reservation } from "../models/reservationSchema.js";


// export const sendRsevation= async(req,res,next)=>{
//     const{firstName, lastName,email,date,time,phone}=req.body

//     if(!firstName || !lastName || !email || !date || !time ||!phone){
//         return next(new ErrorHandler("please fill full reservation form", 400))
//     }

//     try{
//         await Reservation.create({firstName, lastName,email,date,time,phone})
//         res.status(200).json({
//             success:true,
//             message:"reservation send successfully"
//         })
//     }catch(error){
// if(error.name==="validationError"){
//     const validationErrors=Object.values(error.errors).map((err)=>err.message)

//     return next (new ErrorHandler(
//         validationErrors.join(' ,'),400
//     ))
// }
// return next(error)
//     }
// }