export default function Balance({ currentAcc }) {
  const totalBalance =
    currentAcc.hasOwnProperty("movements") &&
    currentAcc["movements"].reduce((mov, acc) => mov + acc, 0);
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{new Date().toDateString()}</span>
        </p>
      </div>
      <p className="balance__value">₹{totalBalance}</p>
    </div>
  );
}
