import { useState } from "react";
import Scoreboard from "../components/Scoreboard"
import DialogBox from "../components/DialogBox";

function ScoreboardPaulista() {
    let [teamName1, setTeamName1] = useState("Team 1");
    let [teamName2, setTeamName2] = useState("Team 2");
    let [wins1, setWins1] = useState(0);
    let [wins2, setWins2] = useState(0);
    let [score1, setScore1] = useState(0);
    let [score2, setScore2] = useState(0);
    let [wonLastRound, setWonLastRound] = useState("");
    let [showDialogBox, setShowDialogBox] = useState(false);
    let [elevensShown, setElevensShown] = useState(false);

    function handleScoreChange(teamId, pts) {
        let currentScore = 0;
        if (teamId === 1) {
            currentScore = score1;
            if ((currentScore + pts) < 0) { setScore1(0); return; }
            if ((currentScore + pts) >= 12) { 
                setScore1(12);
                setWins1(prev=>prev+1);
                if (wins1 === 0) { setShowDialogBox(true); setWonLastRound(teamName1); }
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
                if (wins2 === 0){ setShowDialogBox(true); setWonLastRound(teamName2); }
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
        setShowDialogBox(false);
        setElevensShown(false);
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

    function isElevens() {
        return (score1 === 11 && score2 === 11);
    }

    return (
        <>
            <h2>Scoreboard Paulista</h2>

            {isGameOver() && (
                <DialogBox isOpen={true} onClose={() => resetGame()} buttonText={"New Game"}>
                    <h3>Game Over!</h3>
                    <br />
                    <p style={{fontSize: "12pt", fontWeight: "300", color: "black"}}> {wins1 == 2? teamName1 : teamName2} wins the game!</p>
                </DialogBox>
            )}

            {!isGameOver() && (
                <>
                    <div className="scoreboards-display">
                        <Scoreboard team={teamName1} type="Paulista" wins={wins1} score={score1} onScoreChange={(pts) => handleScoreChange(1, pts)} onNameChange={(name) => handleNameChange(1, name)} />
                        <Scoreboard team={teamName2} type="Paulista" wins={wins2} score={score2} onScoreChange={(pts) => handleScoreChange(2, pts)} onNameChange={(name) => handleNameChange(2, name)} />
                    </div>

                    {isElevens() && !elevensShown && (
                        <DialogBox isOpen={true} onClose={() => setElevensShown(true)}>
                            <p style={{color: "black"}}>11's Hand!</p>
                        </DialogBox>
                    )}

                    {showDialogBox && (
                        <DialogBox isOpen={true} onClose={() => resetRound()}>
                            <p style={{color: "black"}}>{wonLastRound} Won!</p>
                        </DialogBox>
                    )}
                </>
            )}
        </>
    );
}

export default ScoreboardPaulista