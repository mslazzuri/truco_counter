import { useNavigate } from "react-router-dom";
import "./styles/HomePageStyle.css";

function App() {

  const navigate = useNavigate();
  const handlePageClick = (path) => { navigate(path); };
  
  return (
    <>
      {/* <h1>Secco Truco</h1>
      <hr /> */}
      <div className="menu-buttons">
        <button onClick={() => handlePageClick("/scoreboard-paulista")}>Scoreboard Paulista</button>
        <button onClick={() => handlePageClick("/scoreboard-mineiro")}>Scoreboard Mineiro</button>
        <button onClick={() => handlePageClick("/how-to-play")}>How To Play</button>
        <button onClick={() => handlePageClick("/order-of-cards")}>Order of Cards</button>
      </div>
    </>
  )
}

export default App
