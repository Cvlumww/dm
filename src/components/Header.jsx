import { useState, useContext } from "react";

import AppContext from "../AppContext";

import Inputs from "./Inputs";
import InputsPC from "./InputsPC";

const Header = () => {
  const [npcPopUp, SetNpcPopUp] = useState(false);
  const toggleNPCPopUp = () => {
    SetNpcPopUp(!npcPopUp);
  };

  const [pcPopUp, SetPcPopUp] = useState(false);
  const togglePCPopUp = () => {
    SetPcPopUp(!pcPopUp);
  };

  const { Clear } = useContext(AppContext);
  const { Sort } = useContext(AppContext);

  const { initiatives, roundCounter, updateRoundCounter } =
    useContext(AppContext);

  return (
    <div className="Header">
      <h1>DnD Easier Combat for GM's</h1>

      <div className="buttons">
        <button onClick={togglePCPopUp} className="Add" autoFocus>
          Add PC
        </button>

        <button onClick={toggleNPCPopUp} className="Add" autoFocus>
          Add NPC
        </button>
        <button onClick={Clear} className="Clear">
          Clear
        </button>
        <button onClick={Sort} className="Sort">
          Sort
        </button>
      </div>

      {initiatives?.length > 0 ? (
        <div className="RoundContainer">
          <div className="DisplayRound" id="Round">
            <h3>Round : {roundCounter}</h3>
          </div>
        </div>
      ) : (
        <span></span>
      )}

      {npcPopUp && <Inputs toggle={toggleNPCPopUp} />}
      {pcPopUp && <InputsPC toggle={togglePCPopUp} />}
    </div>
  );
};

export default Header;
