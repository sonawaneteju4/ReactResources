import React, { useState } from "react";
import { Input } from "../../components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";


const Currency = () => {
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(amount);
    setAmount(convertedAmmount);
  };

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to]);
  };

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/19813340/pexels-photo-19813340/free-photo-of-always-look-up.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1 container m-5">
                <Input
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom (currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light" onClick={swap}>
                  swap
                </button>
              </div>
              <div className="w-full mt-1 container m-5">
                <Input
                  label="To"
                  amount={convertedAmmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="w-full btn btn-light">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
