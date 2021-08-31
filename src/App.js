import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const btn = [0.05, 0.1, 0.15, 0.25, 0.3];

  const [tips, setTips] = useState(0);
  const [custom, setCustom] = useState(false);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [billError, setBillError] = useState(false);
  const [personError, setPersonError] = useState(false);

  const calcAll = () => {
    if (bill <= 0) setBillError(true);
    else setBillError(false);
    if (people <= 0) setPersonError(true);
    else setPersonError(false);

    if (!billError && tips !== 0 && !personError) {
      const tipPerPerson = (bill * tips) / people;
      const billPerPerson = (bill * (1 + tips)) / people;
      setTipAmount(tipPerPerson.toFixed(2));
      setTotal(billPerPerson.toFixed(2));
    }
  };

  const handleTipBtn = (percent) => {
    if (!custom) {
      setTips(percent);
      calcAll();
    }
  };

  const handleTipCustom = (e) => {
    if (e.target.value !== "") {
      setCustom(true);
      setTips(e.target.value / 100);
    } else {
      setCustom(false);
    }
    console.log(tips);
    calcAll();
  };

  const handleResetBtn = () => {
    setTotal(0);
    setCustom(false);
    setBill(0);
    setTips(0);
    setTipAmount(0);
    setTotal(0);
    setPeople(0);
    setPersonError(false);
    setBillError(false);
    document.querySelector(".inputBill").value = 0;
    document.querySelector(".inputPeopleNumber").value = 0;
  };

  return (
    <div className="App font-mono">
      <div className="flex flex-col min-h-screen w-full	justify-center items-center mx-auto bg-indigo-200	">
        <div className="text-lg mb-9 font-bold text-purple-800">
          <div className="mb-1">S P L I</div>
          <div>T T E R</div>
        </div>
        <div className="bg-white	p-8	rounded-3xl	w-1/2 min-w-max	text-sm">
          <div className="flex items-center">
            <div className="flex flex-col mr-10">
              <div className="flex justify-between items-center  mb-2">
                <div>Bill</div>
                {billError ? (
                  <div className="text-red-400">Can't be zero</div>
                ) : null}
              </div>
              <div
                className={`flex justify-between bg-gray-100	px-4 py-2 rounded ${
                  billError ? "border-2 border-red-400" : null
                }`}
              >
                <img className="h-full self-center" src="./icon-dollar.svg" />
                <input
                  className="justify-self-end	bg-transparent text-right inputBill"
                  type="number"
                  onChange={(e) => {
                    setBill(e.target.value);
                    calcAll();
                  }}
                />
              </div>
              <h4 className="mt-5 text-left mb-2">Select Tip %</h4>
              <div className="grid grid-cols-3 gap-4 text-xl">
                {btn.map((obj) => {
                  return (
                    <button
                      className="bg-purple-800 text-white rounded py-2"
                      onClick={() => handleTipBtn(obj)}
                    >
                      {obj * 100 + "%"}
                    </button>
                  );
                })}

                <input
                  type="number"
                  className="bg-purple-800 text-white rounded w-24 text-center px-3 inputTipCustom"
                  placeholder="Custom"
                  onChange={(e) => handleTipCustom(e)}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mt-5 mb-2">
                  <div>Custom Number of People</div>
                  {personError ? (
                    <div className="text-red-400">Can't be zero</div>
                  ) : null}
                </div>
                <div
                  className={`flex justify-between bg-gray-100	px-4 py-2 rounded ${
                    personError ? "border-2 border-red-400" : null
                  }`}
                >
                  <img className="h-full self-center" src="./icon-person.svg" />
                  <input
                    className="justify-self-end	bg-transparent	text-right inputPeopleNumber "
                    type="number"
                    onChange={(e) => {
                      setPeople(e.target.value);
                      // console.log(e.target.value);
                      calcAll();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-purple-600	rounded-xl w-80 h-80 px-5 py-10 flex flex-col justify-between text-white">
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div>Tip Amount</div>
                    <div className="text-xs">/ person</div>
                  </div>
                  <div className="text-4xl">{tipAmount}$</div>
                </div>
                <div className="flex justify-between items-center mt-6 mb-">
                  <div className="text-left">
                    <div>Total</div>
                    <div className="text-xs">/ person</div>
                  </div>
                  <div className="text-4xl	">{total}$</div>
                </div>
              </div>
              <button
                className="w-full bg-purple-200	rounded py-2 btn-reset text-purple-600"
                onClick={() => handleResetBtn()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">PonPond</a>.
      </div>
    </div>
  );
}

export default App;
