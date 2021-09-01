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
    document.querySelector(".inputTipCustom").value = "";
  };

  return (
    <div className="App font-mono">
      <div className="flex flex-col min-h-full sm:min-h-screen w-full	justify-center items-center mx-auto bg-Lightgrayishcyan	">
        <div className="mt-9 text-xl mb-9  font-bold text-darkcyan sm:text-lg sm:mt-0">
          <div className="mb-1">S P L I</div>
          <div>T T E R</div>
        </div>
        <div className="bg-White w-full	text-sm rounded-t-3xl p-8	sm:rounded-3xl sm:w-1/2 sm:min-w-max">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="flex flex-col mb-8 sm:mb-0 sm:mr-10">
              <div className="flex justify-between items-center  mb-2">
                <div className="text-darkcyan">Bill</div>
                {billError ? (
                  <div className="text-red">Can't be zero</div>
                ) : null}
              </div>
              <div
                className={`flex justify-between border-2 border-transparent hover:border-cyan bg-LightGrayishcyan	px-4 py-2 rounded ${
                  billError ? "border-2 border-red" : null
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
              <h4 className="mt-5 text-left mb-2 text-darkcyan">
                Select Tip %
              </h4>
              <div className="grid grid-cols-2  gap-4 text-xl sm:grid-cols-3">
                {btn.map((obj) => {
                  return (
                    <button
                      className="bg-darkcyan text-LightGrayishcyan rounded py-2 hover:bg-Lightgrayishcyan hover:text-darkcyan"
                      onClick={() => handleTipBtn(obj)}
                    >
                      {obj * 100 + "%"}
                    </button>
                  );
                })}

                <input
                  type="number"
                  className="text-darkcyan rounded  text-center px-3 inputTipCustom border-2 border-transparent  bg-LightGrayishcyan hover:border-cyan focus:border-cyan sm:w-24"
                  placeholder="Custom"
                  onChange={(e) => handleTipCustom(e)}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mt-5 mb-2">
                  <div className="text-darkcyan">Custom Number of People</div>
                  {personError ? (
                    <div className="text-red">Can't be zero</div>
                  ) : null}
                </div>
                <div
                  className={`flex justify-between border-2 border-transparent hover:border-cyan bg-LightGrayishcyan	px-4 py-2 rounded ${
                    personError ? "border-2 border-red" : null
                  }`}
                >
                  <img className="h-full self-center" src="./icon-person.svg" />
                  <input
                    className="justify-self-end	bg-transparent	text-right inputPeopleNumber "
                    type="number"
                    onChange={(e) => {
                      setPeople(e.target.value);
                      calcAll();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-darkcyan	rounded-xl w-80 h-60 px-5 pt-10 pb-4 flex flex-col justify-between text-LightGrayishcyan sm:h-80 sm:pb-8">
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div>Tip Amount</div>
                    <div className="text-xs text-Darkgrayishcyan">/ person</div>
                  </div>
                  <div className="text-4xl text-cyan">{tipAmount}$</div>
                </div>
                <div className="flex justify-between items-center mt-6 mb-">
                  <div className="text-left">
                    <div>Total</div>
                    <div className="text-xs text-Darkgrayishcyan">/ person</div>
                  </div>
                  <div className="text-4xl	text-cyan">{total}$</div>
                </div>
              </div>
              <button
                className="w-full text-lg hover:bg-Lightgrayishcyan	rounded py-2 btn-reset text-darkcyan bg-cyan"
                onClick={() => handleResetBtn()}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution text-xs">
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
