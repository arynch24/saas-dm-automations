"use server";

import { redirect } from "next/navigation";

export const onOAuthInstagram = (strategy: "INSTAGRAM" | "CRM") => {
  if (strategy === "INSTAGRAM") {
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string);
    console.log("Instagram Auth");
  } else {
    console.log("CRM Auth");
  }
};
