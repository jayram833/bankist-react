import { useState } from "react";

export default function Close({
  currentAcc,
  accounts,
  onSetCurrentAcc,
  onSetIsLoggedIn,
}) {
  const [currentUser, setCurrentUser] = useState("");
  const [currentPin, setCurrentPin] = useState("");

  function handleCloseAccount(e) {
    e.preventDefault();
    if (
      currentUser === currentAcc.userName &&
      Number(currentPin) === currentAcc.pin
    ) {
      const accToBeRemoved = accounts.findIndex((account) => {
        return account.owner === "Jonas Schmedtmann";
      });
      accounts.splice(accToBeRemoved, 1);
      onSetIsLoggedIn(false);
      onSetCurrentAcc({});
    } else {
      alert("Invalid credentials!!");
      setCurrentPin("");
      setCurrentUser("");
    }
  }
  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close">
        <input
          type="text"
          className="form__input form__input--user"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
        />
        <input
          type="password"
          maxLength={6}
          className="form__input form__input--pin"
          value={currentPin}
          onChange={(e) => setCurrentPin(e.target.value)}
        />
        <button
          className="form__btn form__btn--close"
          onClick={handleCloseAccount}
        >
          →
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
}
