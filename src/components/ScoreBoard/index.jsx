import React from "react";
import { FaCoins } from "react-icons/fa";

function ScoreBoard({ balance }) {
  return (
    <div>
      <h2>
        Balance : <FaCoins size={15} /> {balance}
      </h2>
    </div>
  );
}

export default ScoreBoard;
