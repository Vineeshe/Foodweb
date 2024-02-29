import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import toast from "react-hot-toast"
import axios from "axios";

const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState(0)
    const navigate = useNavigate()




    const handleReservation = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("http://localhost:5050/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },

                    withCredentials: true
                }
            )
            toast.success(data.message)

            setFirstName("")
            setLastName("")
            setEmail("")
            setTime("")
            setDate("")
            setPhone(0)
            navigate("/success")


        }
        catch (error) {
            toast.error(error)

        }
    }



    // return (
    //     <section className='reservation' id='reservation'>
    //         <div className="container">
    //             <div className="banner">

    //                 <img src="/reservation.png" alt="" res />
    //             </div>
    //             <div className="banner">
    //                 <div className='reservation_form_box'>
    //                     <h1>MAKE A RESERVATION</h1>
    //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut consequatur non fugiat, culpa adipisci temporibus laudantium fugit! Tempora ut doloremque, excepturi autem cupiditate nobis saepe iure amet nesciunt, neque error.</p>

    //                     <form >

    //                         <div>

    //                             <input type="text" placeholder='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    //                             <input type="text" placeholder='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
    //                         </div>
    //                         <div>
    //                             <input type="text" placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
    //                             <input type="text" placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />

    //                         </div>
    //                         <div>
    //                             <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    //                             <input type="text" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />

    //                         </div>



    //                         <button type='submit' onClick={handleReservation}>RESERVE NOW{""} <span><HiOutlineArrowNarrowRight /></span></button>


    //                     </form>







    //                 </div>

    //             </div>

    //         </div>



    //     </section>
    // )

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="email_tag"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button type="submit" onClick={handleReservation}>
                                RESERVE NOW{" "}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );



}



export default Reservation
