import React from "react"; 
import "../style/card.css"

function Card(user) {
    const { name, job, hobby }= user;
    return (
        <div className="card_container">
            <p className="card_body">Name: {name}</p>
            <p className="card_body">Job: {job}</p>
            <p className="card_body">Hobby: {hobby}</p>
        </div>
    )
}

export default Card;