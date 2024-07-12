import "./styles.css";
import Nav from "./Nav";
import Main from "./Main";
import { useState } from "react";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2024-07-02T21:31:17.178Z",
    "2024-07-03T07:42:02.383Z",
    "2024-07-04T09:15:04.904Z",
    "2024-07-05T10:17:24.185Z",
    "2024-07-06T14:11:59.604Z",
    "2024-07-07T17:01:17.194Z",
    "2024-07-08T23:36:17.929Z",
    "2024-07-09T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2024-07-02T21:31:17.178Z",
    "2024-07-03T07:42:02.383Z",
    "2024-07-04T09:15:04.904Z",
    "2024-07-05T10:17:24.185Z",
    "2024-07-06T14:11:59.604Z",
    "2024-07-07T17:01:17.194Z",
    "2024-07-08T23:36:17.929Z",
    "2024-07-09T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

export default function App() {
  // const [movements, setMovements] = useState(accounts[0].movements);
  const [currentAcc, setCurrentAcc] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Nav
        accounts={accounts}
        currentAcc={currentAcc}
        onSetCurrentAcc={setCurrentAcc}
        isLoggedIn={isLoggedIn}
        onSetIsLoggedIn={setIsLoggedIn}
      />
      <Main
        isLoggedIn={isLoggedIn}
        currentAcc={currentAcc}
        accounts={accounts}
        onSetCurrentAcc={setCurrentAcc}
        onSetIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}
