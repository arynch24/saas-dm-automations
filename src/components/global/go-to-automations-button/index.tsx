import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { AutomationDuoToneWhite } from "@/icons";
import { usePaths } from "@/hooks/user-nav";
type Props = {};

function GoToAutomationsButton({}: Props) {
  const { pathname } = usePaths();
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
      <AutomationDuoToneWhite />
      <Link href={`${pathname}/automations`}>
        <p className="lg:inline hidden">Go to Automations</p>
      </Link>
    </Button>
  );
}

export default GoToAutomationsButton;
