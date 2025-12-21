import { useState } from "react";
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
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{backgroundColor: "#444", padding: "25px", borderRadius: "10px"}}>
                <textarea 
                    value={team} 
                    maxLength={15}
                    rows={1}
                    style={{
                        textAlign: "center", 
                        alignContent: "center", 
                        border: "none", 
                        padding: "10px",
                        borderRadius: "10px", 
                        resize: "none",
                        outline: "2px solid transparent",
                        transition: "outline 0.2s"
                    }}
                    onFocus={(e) => e.target.style.outline = "2px solid cadetblue"}
                    onBlur={(e) => e.target.style.outline = "2px solid transparent"}
                    onChange={(e) => onNameChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="Score">{score}</div>
                
                <div style={{display: "flex", gap: "10px", justifyContent: "center", margin: "10px 0"}}>
                    <div style={{width: "10px", height: "10px", borderRadius: "50%", 
                        background: wins >= 1 ? "green" : "gray"
                    }}></div>
                    
                    <div style={{width: "10px", height: "10px", borderRadius: "50%", 
                        background: wins >= 2 ? "green" : "gray"
                    }}></div>
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