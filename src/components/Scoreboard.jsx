import "../styles/ScoreboardStyles.css";

function Scoreboard({team, type, score, wins, onScoreChange, onNameChange}) {
    const gameButtons = type === "Paulista"? ["+1", "+3", "+6", "+9", "-1", "-3"] : ["+2", "+4", "+6", "+8", "-2", "-4"];
    function handleScoreChange(pts) { onScoreChange(pts); }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur(); // Remove focus from textarea
        }
    };

    return (
        <>
        <div className="centered-div-scoreboard">
            <div className="scoreboard">
                <textarea 
                    value={team} 
                    maxLength={15}
                    rows={1}
                    onFocus={(e) => e.target.style.outline = "2px solid var(--coral)"}
                    onBlur={(e) => e.target.style.outline = "2px solid transparent"}
                    onChange={(e) => onNameChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="Score">{score}</div>
                
                <div className="wins-indicator">
                    <div className={`circle${wins >= 1 ? " active" : ""}`}></div>
                    <div className={`circle${wins >= 2 ? " active" : ""}`}></div>
                </div>
                
                <div className="game-grid-buttons">
                    {gameButtons.map((btn) => (
                        <button key={btn} className="game-button" onClick={() => handleScoreChange(Number(btn))}>
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Scoreboard