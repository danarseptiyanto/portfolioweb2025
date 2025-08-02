import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

const BtnLink = ({ href = "#", text = "Button" }) => {
  return (
    <a href={href}>
      <button className="flex items-center gap-2 uppercase">
        {text} <RiArrowRightUpLine className="text-l-line" size={26} />
      </button>
    </a>
  );
};

export default BtnLink;
