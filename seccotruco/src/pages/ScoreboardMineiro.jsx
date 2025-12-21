import { useState } from "react";
import Scoreboard from "../components/Scoreboard"

function ScoreboardPaulista() {
    let [teamName1, setTeamName1] = useState("Team 1");
    let [teamName2, setTeamName2] = useState("Team 2");
    let [wins1, setWins1] = useState(0);
    let [wins2, setWins2] = useState(0);
    let [score1, setScore1] = useState(0);
    let [score2, setScore2] = useState(0);
    let [displayRoundMessage, setDisplayRoundMessage] = useState(false);
    let [wonLastRound, setWonLastRound] = useState("");

    function handleScoreChange(teamId, pts) {
        let currentScore = 0;
        if (teamId === 1) {
            currentScore = score1;
            if ((currentScore + pts) < 0) { setScore1(0); return; }
            if ((currentScore + pts) >= 12) { 
                setScore1(12);
                setWins1(prev=>prev+1);
                if (wins1 === 0) { setDisplayRoundMessage(true); setWonLastRound(teamName1); }
                return; 
            }
            setScore1(currentScore+pts);
        }
        else if (teamId === 2) {
            currentScore = score2;
            if ((currentScore + pts) < 0) { setScore2(0); return; }
            if ((currentScore + pts) >= 12) {
                setScore2(12);
                setWins2(prev=>prev+1);
                if (wins2 === 0){ setDisplayRoundMessage(true); setWonLastRound(teamName2); }
                return;
            }
            setScore2(currentScore+pts);
        }
    }

    function isGameOver() { return (wins1 === 2) || (wins2 === 2); }

    function resetGame() {
        setScore1(0);
        setScore2(0);
        setWins1(0);
        setWins2(0);
    }

    function resetRound() {
        setDisplayRoundMessage(false);
        setScore1(0);
        setScore2(0);
    }

    function handleNameChange(teamId, newName) {
        if (teamId === 1) {
            setTeamName1(newName);
        } else if (teamId === 2) {
            setTeamName2(newName);
        }
    }

    return (
        <>
        <h2 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Scoreboard Mineiro</h2>

        {isGameOver() && (
            <div style={{textAlign: "center", marginBottom: "20px"}}>
                <h3>Game Over! {wins1 === 2? teamName1 : teamName2} wins the game!</h3>
                <button onClick={resetGame}>New Match</button>
            </div>
        )}

        {displayRoundMessage && (
            <div style={{textAlign: "center", marginBottom: "20px"}}>
                <h3>Round is over! {wonLastRound} won the round!</h3>
                <button onClick={resetRound}>New Round</button>
            </div>
        )}

        {!isGameOver() && !displayRoundMessage && (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", height: "100%"}}>
                <Scoreboard team={teamName1} type="Mineiro" wins={wins1} score={score1} onScoreChange={(pts) => handleScoreChange(1, pts)} onNameChange={(name) => handleNameChange(1, name)} />
                <Scoreboard team={teamName2} type="Mineiro" wins={wins2} score={score2} onScoreChange={(pts) => handleScoreChange(2, pts)} onNameChange={(name) => handleNameChange(2, name)} />
            </div>
        )}
        </>
    );
}

export default ScoreboardPaulista