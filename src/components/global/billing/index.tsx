import React from "react";
import PaymentCard from "./payment-card";

type Props = {};

function Billing({}: Props) {
  return (
    <div>
      <PaymentCard label="FREE" current="FREE" />
    </div>
  );
}

export default Billing;
