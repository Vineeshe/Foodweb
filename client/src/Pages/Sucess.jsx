import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Sucess() {

    const [countdown, SetCountdown] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        const timeoutId = setInterval(() => {
            SetCountdown((preCount) => {
                if (preCount === 1) {
                    clearInterval(timeoutId)
                    navigate("/")
                }
                return preCount - 1
            })
        }, 1000)
        return () => clearInterval(timeoutId)
    }, [navigate])


    return (
        <section className='notFound'>
            <div className="container">
                <img src="/sandwich.png" alt="sucess" />
                <h1>Redirecting to home in{countdown} seconds...</h1>
                <Link to={'/'}>Back to home <span> <HiOutlineArrowNarrowRight/> </span> </Link>
            </div>







        </section>

    )
}

export default Sucess
