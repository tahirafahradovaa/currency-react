import React, { useEffect, useState } from "react";

function Finalcurrency() {
  const [currency, setCurrency] = useState([]);
  const [inputValue, setinputValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [currData, setcurrData] = useState("USD");
  const [currData2, setcurrData2] = useState("TRY");
  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=0HR5QQvLJc6umETcyer31g1goezgFzrNtwVbrdVS"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.data);
      });
  }, []);
  const handleValueChange1 = (inputValue) => {
    setValue2((inputValue * currency[currData2]) / currency[currData]);

    setinputValue(inputValue);
  };
  const handleCurrencyChange1 = (currData) => {
    setValue2((inputValue * currency[currData2]) / currency[currData]);

    setcurrData(currData);
  };
  const handleValueChange2 = (value2) => {
    setinputValue((value2 * currency[currData]) / currency[currData2]);

    setValue2(value2);
  };
  const handleCurrencyChange2 = (currData2) => {
    setValue2((inputValue * currency[currData2]) / currency[currData]);

    setcurrData2(currData2);
  };
  return (
    <>
      <div className="container">
        <div>
          <input
            type={"number"}
            value={inputValue}
            onChange={(e) => handleValueChange1(e.target.value)}
          />
          <select
            value={currData}
            onChange={(e) => handleCurrencyChange1(e.target.value)}
          >
            {Object.keys(currency).map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>
        <div>
          <input
            type={"number"}
            value={value2}
            onChange={(e) => handleValueChange2(e.target.value)}
          />
          <select
            onChange={(e) => handleCurrencyChange2(e.target.value)}
            value={currData2}
          >
            {Object.keys(currency).map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default Finalcurrency;
