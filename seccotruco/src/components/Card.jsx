import React from "react";
import "../styles/Card.css";

function Card({ value, suit, selected, onClick, highlight }) {
    const suitSymbols = {
        "hearts": "♥",
        "diamonds": "♦",
        "clubs": "♣",
        "spades": "♠",
        "none": ""
    };
    return (
        <div
            className={`card${selected ? " selected" : ""}${highlight ? " highlight" : ""}`}
            onClick={onClick}
        >
            <div className="card-value">{value}</div>
            <div className={`card-suit card-suit-${suit}`}>{suitSymbols[suit]}</div>
        </div>
    );
}

export default Card;
