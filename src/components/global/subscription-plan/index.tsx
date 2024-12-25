import React from "react";

type Props = {
  children: React.ReactNode;
  type: "FREE" | "PRO";
};

function SubscriptionPlan({}: Props) {
  return <div>Subscription Plan</div>;
}

export default SubscriptionPlan;
