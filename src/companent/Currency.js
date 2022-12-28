import React, { useEffect, useState } from "react";

import "../App.css";

function Currency() {
  const [currencyAll, setcurrencyAll] = useState([]);
  const [baseCode, setbaseCode] = useState("USD");
  const [keys, setkeys] = useState([]);
  const [change, setChange] = useState(false);
  const [keys2, setkeys2] = useState([]);
  const [firstInput, setfirstInput] = useState(1);
  const [secondInput, setSecondInput] = useState(1);
  const [secondOption, setSecondOption] = useState("USD");

  const getData = () => {
    fetch(
      `https://v6.exchangerate-api.com/v6/04bdb665ebdbcd4e21902647/latest/${baseCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setkeys2([...Object.keys(data.conversion_rates)]);

        setkeys([...Object.keys(data.conversion_rates)]);
        setcurrencyAll(data.conversion_rates);
      });
  };
  const setNew = (e) => {
    setbaseCode(e.target.value);
    setChange(true);
  };
  useEffect(() => {
    getData();
  }, [baseCode]);
  return (
    <>
      <div className="container">
        <div>
          <input
            type="number"
            value={firstInput}
            onChange={(e) => setfirstInput(e.target.value)}
          />
          <select onChange={(e) => setNew(e)}>
            {keys.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <input
            type="number"
            value={(firstInput * currencyAll[secondOption]).toFixed(2)}
            onChange={(e) => setSecondInput(e.target.value)}
          />
          <select onChange={(e) => setSecondOption(e.target.value)}>
            {keys2.map((item) => {
              return (
                <option
                  onChange={(e) => setSecondInput(e.target.value)}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default Currency;
