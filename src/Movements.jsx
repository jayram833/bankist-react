import { useState } from "react";

export default function Movements({ currentAcc }) {
  return (
    <div className="movements">
      {currentAcc.movements.map((mov, i) => (
        <Movement mov={mov} key={i + 1} ind={i + 1} />
      ))}
    </div>
  );
}

function Movement({ mov, ind }) {
  return (
    <div className="movements__row">
      <div
        className={`movements__type ${mov > 0 ? "movements__type--deposit" : "movements__type--withdrawal"}`}
      >
        {ind} {mov > 0 ? "deposit" : "withdrawal"}
      </div>
      <div className="movements__date">3 days ago</div>
      <div className="movements__value">₹{mov}</div>
    </div>
  );
}
