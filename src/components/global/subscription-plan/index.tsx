import { useQueryUser } from "@/hooks/user-queries";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "FREE" | "PRO";
};

function SubscriptionPlan({ children, type }: Props) {
  const { data } = useQueryUser();

  return data?.data?.subscription?.plan === type && children;
}

export default SubscriptionPlan;
