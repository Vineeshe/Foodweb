import { Link } from "react-router-dom"
import { HiOutlineArrowRight } from 'react-icons/hi'



const About = () => {
    return (
        <section className="about" id="about">

            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>the only thing we're serious about is food</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat repellat ad tenetur esse autem labore illo vel commodi ab. Doloribus odio assumenda voluptate nulla culpa, dolorum modi debitis eos.
                    </p>
                    <Link to={'/'}>Explore Menu<span>
                        <HiOutlineArrowRight />
                    </span>

                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>



            </div>

        </section>



    )
}

export default About
