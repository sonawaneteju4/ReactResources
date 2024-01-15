import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  debugger
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
      console.log(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currency]);
  console.log(data);
  return data
}

export default useCurrencyInfo;