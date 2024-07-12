import { useState } from "react";

export default function Transfer({ currentAcc, accounts, onSetCurrentAcc }) {
  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState(0);
  function handleTransfer(e) {
    e.preventDefault();
    if (!accounts.some((acc) => acc.userName === transferTo)) {
      alert("Account does not exist!!");
      return;
    }
    const receiverAcc = accounts.find(
      (account) => account.userName === transferTo,
    );
    if (receiverAcc && receiverAcc.userName !== currentAcc.userName) {
      const movs = currentAcc.movements;
      const totalBalance = movs.reduce((mov, acc) => mov + acc, 0);
      if (amount < totalBalance) {
        receiverAcc.movements.unshift(Number(amount));
        receiverAcc.movementsDates.unshift(new Date().toISOString());
        const accCopy = { ...currentAcc };
        accCopy.movements = [Number(-amount), ...accCopy.movements];
        accCopy.movementsDates = [
          new Date().toISOString(),
          ...accCopy.movementsDates,
        ];
        onSetCurrentAcc(accCopy);
      } else {
        alert("Insufficient Balance");
      }
    } else {
      alert("Can't transfer to yourself!!");
    }
    setAmount(0);
    setTransferTo("");
  }
  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer">
        <input
          type="text"
          className="form__input form__input--to"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
        />
        <input
          type="number"
          className="form__input form__input--amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="form__btn form__btn--transfer"
          onClick={handleTransfer}
        >
          →
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
}
