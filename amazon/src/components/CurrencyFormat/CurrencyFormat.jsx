import React from "react";

function CurrencyFormat({ amount }) {
  return <p>${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>;
}

export default CurrencyFormat;
