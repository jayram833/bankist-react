export default function Summary({ currentAcc }) {
  const movs = currentAcc.movements;
  const creditedAmt = movs
    .filter((mov) => mov > 0)
    .reduce((mov, acc) => mov + acc, 0);
  const debitedAmt = movs
    .filter((mov) => mov < 0)
    .reduce((mov, acc) => mov + acc, 0);
  const interestAmt = creditedAmt * currentAcc.interestRate - creditedAmt;

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">₹{creditedAmt}</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">
        ₹{Math.abs(debitedAmt.toFixed(2))}
      </p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">
        ₹{interestAmt.toFixed(2)}
      </p>
      <button className="btn--sort">↓ SORT</button>
    </div>
  );
}
