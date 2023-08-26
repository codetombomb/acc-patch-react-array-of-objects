import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ItemCardSection from "./Components/ItemCardSection/ItemCardSection";

function App() {
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then(resp => resp.json())
      .then(desserts => setDesserts(desserts))
  }, []);
  
  return <div className="App">
    <Sidebar />
    <ItemCardSection />
  </div>;
}

export default App;
