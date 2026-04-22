import { Fragment } from "react";
import truco from "../HowToPlay.json";
import "../styles/HowToPlay.css";

function SectionTitle({ children }) {
    return (
        <>
            <h4>{children}</h4>
            <hr />
        </>
    );
}

function VariantCard({ title, children }) {
    return (
        <div className="variant-card">
            {title && <h5 className="variant-title">{title}</h5>}
            {children}
        </div>
    );
}

function HowToPlay() {
    return (
        <div className="how-to-play">
            <h2>How to Play</h2>
            <p>{truco.introduction}</p>

            <SectionTitle>{truco.deckTitle}</SectionTitle>
            <p>{truco.deck}</p>

            <SectionTitle>{truco.objectiveTitle}</SectionTitle>
            <ul>
                {truco.objective.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <SectionTitle>{truco.gameplayTitle}</SectionTitle>
            <ul>
                {truco.gameplay.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <SectionTitle>{truco.tiedRoundsTitle}</SectionTitle>
            <ul>
                {truco.tiedRounds.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <SectionTitle>{truco.manilhasTitle}</SectionTitle>
            <p>{truco.manilhasIntro}</p>
            <div className="variant-grid">
                <VariantCard title={truco.mineiroManilhas.title}>
                    <ol>
                        {truco.mineiroManilhas.cards.map((c, i) => <li key={i}>{c}</li>)}
                    </ol>
                </VariantCard>
                <VariantCard title={truco.paulistaManilhas.title}>
                    <p>{truco.paulistaManilhas.description}</p>
                    <p className="htp-example">{truco.paulistaManilhas.example}</p>
                </VariantCard>
            </div>

            <SectionTitle>{truco.trucoTitle}</SectionTitle>
            <p>{truco.trucoIntro}</p>
            <ul>
                {truco.trucoResponses.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <div className="truco-scale">
                {["1 pt", "3 pts", "6 pts", "9 pts", "12 pts"].map((step, i, arr) => (
                    <Fragment key={i}>
                        <span className="scale-step">{step}</span>
                        {i < arr.length - 1 && <span className="scale-arrow">→</span>}
                    </Fragment>
                ))}
            </div>
            <p className="htp-note">{truco.trucoWarning}</p>
            <div className="variant-grid">
                <VariantCard><p>{truco.trucoVariations.mineiro}</p></VariantCard>
                <VariantCard><p>{truco.trucoVariations.paulista}</p></VariantCard>
            </div>

            <SectionTitle>{truco.specialHandsTitle}</SectionTitle>
            <div className="variant-grid">
                <VariantCard title={truco.atEleven.title}>
                    <ul>
                        {truco.atEleven.rules.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </VariantCard>
                <VariantCard title={truco.ironHand.title}>
                    <p>{truco.ironHand.description}</p>
                </VariantCard>
            </div>

            <SectionTitle>{truco.tipsTitle}</SectionTitle>
            <ul>
                {truco.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
        </div>
    );
}

export default HowToPlay;
