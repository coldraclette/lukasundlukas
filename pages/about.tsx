import React from "react";
import { AmgwerdCV } from "../components/contact/amgwerdCV";
import { FrischknechtCV } from "../components/contact/frischknechtCV";

export default function About() {
  return (
    <div className="flex justify-between">
      <AmgwerdCV />
      <FrischknechtCV />
    </div>
  );
}
