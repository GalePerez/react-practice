import { useEffect, useState } from "react"
import "../style/featuredpets.css"
import axios from "axios"

function FeaturedPets(props) {
    const { id, image, species, name, breed } = props
    console.log(name)
    return (
        <> 
            <div className="featured-pets-container">
        
                <div key={id} className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{species}</h5>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Breed: {breed}</p>
                    </div>
                </div>
        </div>
             
        </>
    )
}

export default FeaturedPets