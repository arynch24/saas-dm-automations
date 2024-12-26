import React from "react";

type Props = {
  id: string;
};

function AutomationsBreadCrumb({}: Props) {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p>Automations</p>
      </div>
    </div>
  );
}

export default AutomationsBreadCrumb;
