import { useState, useEffect } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [test, SetTest] = useState(false);

  const [inits, SetInits] = useState([]);

  const Clear = () => {
    SetInits([]);
  };

  const DeleteChar = (charName) => {
    // console.log("Delete", charName);
  };

  const Sort = (inits) => {
    console.log(inits);

    const initDescending = [...inits].sort(
      (a, b) => b.initiative - a.initiative
    );
    console.log(initDescending);
  };

  return (
    <div className="App">
      <Header inits={inits} SetInits={SetInits} Clear={Clear} Sort={Sort} />
      <Character inits={inits} SetInits={SetInits} DeleteChar={DeleteChar} />
      <Footer />
    </div>
  );
}

export default App;
