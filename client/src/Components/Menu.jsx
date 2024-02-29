import React from 'react'
import { data } from "../restApi.json"

const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className="container">
                <div className="heading_section">

                    <h1 className="heading">POPULAR DISHES</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minus molestias fugiat, laudantium perspiciatis excepturi eligendi distinctio architecto ea, repellendus ab? Labore dolor vero vel, pariatur voluptates beatae expedita maiores.</p>


                </div>

                <div className="dishes_container">
                    {
                        data[0].dishes.map((element) => (

                            <div className="card" key={element.id}>

                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>


                            </div>



                        ))
                    } </div>

            </div>
        </section>

    )
}

export default Menu
