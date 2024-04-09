import React from "react";
import { NavLink } from "react-router-dom"
import backbutton from "../assets/backbutton.png"

const CatModel = () => {
    return (
        <>
            <div className="main-content">
                <div className="platinum-purr-profiles">
                    {[
                        { name: "Chad 'The Shredder' Whiskerfield", age: 4, enjoys: "Catching waves at dawn.", image: "chad.png" },
                        { name: "Chester 'The Chairman' Longtail", age: 5, enjoys: "Brokerage and long naps on the sofa.", image: "chester.png" },
                        { name: "Pharaoh 'The Mystic' Paws", age: 3, enjoys: "Deciphering ancient hieroglyphics.", image: "egyptian.png" },
                        { name: "Mack 'The Mittens' Tabby", age: 6, enjoys: "Freestyle rapping on street corners.", image: "mackmittens.png" },
                        { name: "Max 'The Nightwalker' Shadow", age: 2, enjoys: "Exploring the city lights after sunset.", image: "max.png" },
                        { name: "Murdock 'The Muscle' Meowstein", age: 7, enjoys: "Heavy lifting and protein shakes.", image: "murdock.png" },
                        { name: "Nalu 'The Wave' Surfpaw", age: 3, enjoys: "Beach volleyball and sunbathing.", image: "nalu.png" },
                        { name: "Southpaw 'The Inked' Clawson", age: 4, enjoys: "Getting new ink and pumpin iron.", image: "southpaw.png" },
                        { name: "Whiskers 'The Wise' McFur", age: 5, enjoys: "Smoking cigars and pondering life's mysteries.", image: "whiskers.png" }


                    ].map(cat => (
                        <div className="profile-card" key={cat.name}>
                            <img src={require(`../assets/${cat.image}`)} alt={`${cat.name}`} />
                            <h3>{cat.name}</h3>
                            <p className="cat-text-model">Age: {cat.age}</p>
                            <p className="cat-text-model">Enjoys: {cat.enjoys}</p>
                            <NavLink to={`/catindex`} className="btn btn-primary custom-btn"> Possibly In Your Area </NavLink>
                        </div>
                    ))}
                    <div className="back-button-container">
                        <div className="back-button">
                            <NavLink to="/">
                                <img src={backbutton} alt="Back Button Cat Image" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatModel;