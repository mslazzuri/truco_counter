import { useState } from 'react';
import "../styles/HowToPlay.css";

function HowToPlay() {
    return(
        <>
        <div className="fabric">
            <h2>How to Play Truco</h2>
            <br />
            <p>
                Truco is a famous card game in Brazil that involves beting, bleffing, being strategic and lively gesturing. 
                Among many different ways of playing it, mainly two different variations stand out: the Paulista and Mineiro. 
                Both will be covered here
            </p>

            <br />
            <br />

            <h4>The Deck</h4>
            <hr />
            <p>
                The Deck is composed of 40 cards only, 12 shorter than a full traditional deck. That is because truco does not uses 
                the eights, nines, and tens (8s, 9s, and 10s). This leaves us with all of the As, 2s, 3s, 4s, 5s, 6s, 7s, Js, Qs, and Ks in the deck.
                But be aware: the order of cards is different than the traditional and will be explained later. There is also a page in this website
                called 'Order of Cards' that visually displays it.
            </p>

            <br />
            <br />
            
            <h4>Order of Cards</h4>
            <hr />
            <p>Here's where both versions start to differ... The Paulista has an order, from 'weakest' to 'strongest' of:</p>
            <br />
            <p>4s, 5s, 6s, 7s, Qs, Js, Ks, As, 2s, 3s</p>
            {/* <p></p> */}

        </div>
        </>
    );
}

export default HowToPlay