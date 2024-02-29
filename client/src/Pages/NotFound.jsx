import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function NotFound() {
    return (
      <section className='notFound'>
     <div className="container">
        <img src="/notFound.svg" alt="not Found" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>
            we cant't seem to find the page you're looking for
        </p>
        <Link to={'/'}>Back to home <span> <HiOutlineArrowNarrowRight/>   </span></Link>

     </div>


      </section>
    )
}

export default NotFound
