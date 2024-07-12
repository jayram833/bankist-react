import Balance from "./Balance";
import Movements from "./Movements";
import Summary from "./Summary";
import Transfer from "./Transfer";
import Loan from "./Loan";
import Close from "./Close";
import Logout from "./Logout";
import { useState } from "react";

export default function Main({
  movements,
  isLoggedIn,
  currentAcc,
  accounts,
  onSetCurrentAcc,
}) {
  if (!isLoggedIn) {
    return null;
  }
  return (
    <main className="app" style={isLoggedIn ? { opacity: 1 } : { opacity: 0 }}>
      <Balance currentAcc={currentAcc} />
      <Movements currentAcc={currentAcc} />
      <Summary currentAcc={currentAcc} />
      <Transfer
        currentAcc={currentAcc}
        accounts={accounts}
        onSetCurrentAcc={onSetCurrentAcc}
      />
      <Loan />
      <Close />
      <Logout />
    </main>
  );
}
