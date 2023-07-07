import React, { useState } from "react";
import "./TipCalculator.css";
import logo from "./Images/logo.svg";
import dollar from "./Images/icon-dollar.svg";
import person from "./Images/icon-person.svg";

const TipCalculator = () => {

  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [percentage, setPercentage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleBill = (e) => {
    setBill(e.target.value);
    if (!numPeople) {
      setShowError(true);
    }
  };

  const handlePercent = (e) => {
    setPercentage((+e.target.value) / 100);
  };

  const handlePeople = (e) => {
    setNumPeople(e.target.value);
    setShowError(false);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPercentage("");
    setBill("");
    setNumPeople("");
  };

  // *************** logic calculation *************************

  const tipPerson = ((+bill) / (+numPeople)) * ((+percentage));
  const totalPerson = ((+tipPerson) * (+numPeople) + (+bill)) / (+numPeople);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="splitter" />
      </div>

      <div className="container">
        <div className="card-LHS">
          <div className="bill">
            <p>Bill</p>
            <div className="dollar">
              <span className="icon">
                <img src={dollar} />
              </span>
              <input placeholder="0" type="number" onChange={handleBill} value={bill} />
            </div>
          </div>

          <div className="input">
            <p>Select Tip %</p>
            <div className="percentage">
              <div
                onClick={(e) => {
                  setPercentage(0.05);
                  e.preventDefault();
                }}
              >
                <a href="#">5%</a>
              </div>
              <div
                onClick={(e) => {
                  setPercentage(0.1);
                  e.preventDefault();
                }}
              >
                <a href="#">10%</a>
              </div>
              <div
                onClick={(e) => {
                  setPercentage(0.15);
                  e.preventDefault();
                }}
              >
                <a href="#">15%</a>
              </div>
              <div
                onClick={(e) => {
                  setPercentage(0.25);
                  e.preventDefault();
                }}
              >
                <a href="#">25%</a>
              </div>
              <div
                onClick={(e) => {
                  setPercentage(0.5);
                  e.preventDefault();
                }}
              >
                <a href="#">50%</a>
              </div>
              <div>
                <input
                  className="custom-input"
                  onChange={handlePercent}
                  placeholder="Custom"
                  type="number"
                />
              </div>
            </div>
          </div>

          <div className="people">
            <div className="people-msg">
              <p>Number of People</p>
              {showError ? <p className="error">Can't be zero </p> : null}
            </div>

            <div className="dollar">
              <span className="icon">
                <img src={person} />
              </span>
              <input
                className={showError ? "people-error" : "input-people "}
                placeholder="0"
                type="number"
                onChange={handlePeople}
                value={numPeople}
              />
            </div>
          </div>
        </div>

        {/* RHS Card */}

        <div className="card-RHS">
          <div className="result">
            <div className="amount">
              <div>
                <span>Tip Amount</span> <br /> <span>/ person </span>
              </div>
              <div className="number">
                ${((showError ? null : tipPerson) || 0.0).toFixed(2)}
              </div>
            </div>

            <div className="amount">
              <div>
                <span>Total</span> <br /> <span>/ person </span>
              </div>
              <div className="number">
                ${((showError ? null : totalPerson) || 0.0).toFixed(2)}
              </div>
            </div>
          </div>
          <a href="#" className="reset-btn" onClick={handleReset}>
            <p>RESET</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
