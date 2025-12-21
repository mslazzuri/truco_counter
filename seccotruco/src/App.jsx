import MenuButton from "./components/MenuButton.jsx";

function App() {

  const scoreboardPages = [
    { name: "Truco Paulista", path: "/scoreboard-paulista" },
    { name: "Truco Mineiro", path: "/scoreboard-mineiro" },
  ];
  
  const rulesPages = [
    { name: "How to Play", path: "/how-to-play" },
    { name: "Order of Cards", path: "/order-of-cards" },
  ];
  
  return (
    <>    
      {/* This is a centered div by the way */}
      <div style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        
        <h1>Welcome to Secco Truco!</h1>
        
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "25px"}}>
          <MenuButton title="Scoreboards" pagesList={scoreboardPages}/>
          <MenuButton title="Rules" pagesList={rulesPages}/>
        </div>
      </div>
    </>
  )
}

export default App
