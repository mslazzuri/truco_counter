import React, { useState } from "react";
import Card from "../components/Card";
import "../styles/Card.css";
import "../styles/OrderOfCards.css";

const PAULISTA_ORDER = [
    { value: "4", suit: "none" },
    { value: "5", suit: "none" },
    { value: "6", suit: "none" },
    { value: "7", suit: "none" },
    { value: "Q", suit: "none" },
    { value: "J", suit: "none" },
    { value: "K", suit: "none" },
    { value: "A", suit: "none" },
    { value: "2", suit: "none" },
    { value: "3", suit: "none" },
];

const PAULISTA_MANILLAS = [
    { value: "Manilla", suit: "diamonds" },
    { value: "Manilla", suit: "spades" },
    { value: "Manilla", suit: "hearts" },
    { value: "Manilla", suit: "clubs" },
];

const MINEIRO_ORDER = [
    { value: "4", suit: "none" },
    { value: "5", suit: "none" },
    { value: "6", suit: "none" },
    { value: "7", suit: "none" },
    { value: "Q", suit: "none" },
    { value: "J", suit: "none" },
    { value: "K", suit: "none" },
    { value: "A", suit: "none" },
    { value: "2", suit: "none" },
    { value: "3", suit: "none" },
    { value: "7", suit: "diamonds" },
    { value: "A", suit: "spades" },
    { value: "7", suit: "hearts" },
    { value: "4", suit: "clubs" },
];

function OrderOfCards() {
    const [viraIndex, setViraIndex] = useState(null);

    // Compute the current order for Paulista
    let paulistaCards = [...PAULISTA_ORDER];
    let manillas = [];
    if (viraIndex !== null) {
        // The manillas are the next card after vira, wrapping around
        const nextIndex = (viraIndex + 1) % PAULISTA_ORDER.length;
        paulistaCards = [
            ...PAULISTA_ORDER,
            ...PAULISTA_MANILLAS.map((m, i) => ({ ...m, value: PAULISTA_ORDER[nextIndex].value, suit: m.suit })),
        ];
        manillas = PAULISTA_MANILLAS.map((m, i) => ({ ...m, value: PAULISTA_ORDER[nextIndex].value, suit: m.suit }));
    }

    function resetOrder() {
        setViraIndex(null);
    }

    return (
        <div className="fabric">
            <h2>Order Of Cards</h2>

            <h4>Paulista</h4>
            <hr />
            <div className="card-row">
                {PAULISTA_ORDER.map((card, idx) => (
                    <Card
                        key={idx}
                        value={card.value}
                        suit={card.suit}
                        selected={viraIndex === idx}
                        onClick={() => setViraIndex(idx)}
                    />
                ))}
                {viraIndex !== null &&
                    manillas.map((card, idx) => (
                        <Card
                            key={"manilla-" + idx}
                            value={card.value}
                            suit={card.suit}
                            highlight
                            />
                    ))}
            </div>
            
            {viraIndex !== null && ( 
                <button className="reset-button"
                onClick={() => resetOrder()}>Reset</button>
            )}
            
            <h4>Mineiro</h4>
            <hr />
            <div className="card-row">
                {MINEIRO_ORDER.map((card, idx) => (
                    <Card
                        key={idx}
                        value={card.value}
                        suit={card.suit}
                    />
                ))}
            </div>
        </div>
    );
}

export default OrderOfCards;