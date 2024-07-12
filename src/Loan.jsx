import { useState } from "react";

export default function Loan({ currentAcc, onSetCurrentAcc }) {
  const [loanAmt, setLoanAmt] = useState(0);
  function handleLoan(e) {
    e.preventDefault();
    const minDepositAmount = 0.9 * loanAmt;
    if (currentAcc.movements.some((mov) => mov >= minDepositAmount)) {
      const accCopy = { ...currentAcc };
      accCopy.movements = [...accCopy.movements, Number(loanAmt)];
      setTimeout(() => {
        onSetCurrentAcc(accCopy);
        setLoanAmt(0);
      }, 2000);
    } else {
      alert("Please enter valid amount!!");
      setLoanAmt(0);
    }
  }
  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>
      <form className="form form--loan">
        <input
          type="number"
          className="form__input form__input--loan-amount"
          value={loanAmt}
          onChange={(e) => setLoanAmt(e.target.value)}
        />
        <button className="form__btn form__btn--loan" onClick={handleLoan}>
          →
        </button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
}
