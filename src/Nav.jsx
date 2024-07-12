import { useState } from "react";

export default function Nav({
  accounts,
  currentAcc,
  onSetCurrentAcc,
  isLoggedIn,
  onSetIsLoggedIn,
}) {
  return (
    <nav>
      <p className="welcome">
        {isLoggedIn ? `Welcome, ${currentAcc.owner}` : "Log in to get started"}
      </p>
      <img
        src="https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/11-Arrays-Bankist/starter/logo.png"
        alt="Logo"
        className="logo"
      />
      <LoginForm
        accounts={accounts}
        onSetCurrentAcc={onSetCurrentAcc}
        currentAcc={currentAcc}
        onSetIsLoggedIn={onSetIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      <Logout
        onSetIsLoggedIn={onSetIsLoggedIn}
        onSetCurrentAcc={onSetCurrentAcc}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
}

function LoginForm({
  accounts,
  currentAcc,
  onSetCurrentAcc,
  onSetIsLoggedIn,
  isLoggedIn,
}) {
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");

  accounts.forEach((account) => {
    const [firstName, lastName] = account.owner.split(" ");
    const userName = firstName[0].toLowerCase() + lastName[0].toLowerCase();
    account.userName = userName;
  });
  function handleLogin(e) {
    e.preventDefault();
    if (userName !== "" && pin !== "") {
      const curAcc = accounts.find(
        (acc) => acc.userName === userName && acc.pin === +pin,
      );
      if (curAcc !== undefined) {
        onSetCurrentAcc(curAcc);
        onSetIsLoggedIn(true);
        setUserName("");
        setPin("");
      } else {
        alert("Incorrect username OR password!");
        setUserName("");
        setPin("");
      }
    } else {
      alert("Enter username & pin");
    }
  }

  return (
    <form
      className="login"
      style={isLoggedIn ? { display: "none" } : { display: "block" }}
    >
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {/* In practice, use type="password" */}
      <input
        type="text"
        placeholder="PIN"
        maxLength={4}
        className="login__input login__input--pin"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button className="login__btn" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

function Logout({ onSetCurrentAcc, onSetIsLoggedIn, isLoggedIn }) {
  function handleLogout() {
    onSetCurrentAcc({});
    onSetIsLoggedIn(false);
  }
  return (
    <button
      style={isLoggedIn ? { display: "block" } : { display: "none" }}
      className="logout__btn"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
