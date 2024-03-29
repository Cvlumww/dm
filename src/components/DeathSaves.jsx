import { useState, useContext } from "react";
import AppContext from "../AppContext";

const DeathSaves = ({ initiative }) => {
  const { UpdateHP } = useContext(AppContext);
  const { HandleDeathSavingThrows } = useContext(AppContext);
  const [hpDeltaDeath, setHpDeltaDeath] = useState(0);

  return (
    <div className="DeathSaves">
      <div className="Saves">
        <h4>Death Saves</h4>
        <input type="checkbox" name="Save-1" />
        <input type="checkbox" name="Save-2" />
        <input type="checkbox" name="Save-3" />
      </div>

      <div className="Fails">
        <h4>Death Failures</h4>
        <input
          type="checkbox"
          name="Fail-1"
          className="fails"
          id="Fail-1"
          onChange={(e) => {
            HandleDeathSavingThrows(e, initiative.id);
          }}
        />
        <input
          type="checkbox"
          name="Fail-2"
          className="fails"
          id="Fail-2"
          onChange={(e) => {
            HandleDeathSavingThrows(e, initiative.id);
          }}
        />
        <input
          type="checkbox"
          name="Fail-3"
          className="fails"
          id="Fail-3"
          onChange={(e) => {
            HandleDeathSavingThrows(e, initiative.id);
          }}
        />
      </div>

      <div className="LastChance">
        <input
          type="number"
          className="HPEditBox"
          placeholder="0"
          onChange={(e) => {
            setHpDeltaDeath(parseInt(e.target.value));
          }}
        />{" "}
        <br />
        <button
          className="Heal"
          onClick={() => {
            UpdateHP(hpDeltaDeath, initiative.id);
          }}
        >
          Heal
        </button>
      </div>
    </div>
  );
};

export default DeathSaves;
