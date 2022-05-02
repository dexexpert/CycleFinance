import React from "react";

import { ToolButton } from "../../../components/Button";

const Footer = () => {
  return (
    <div className="header flex flex-col justify-center items-center py-10">
      <img src={process.env.PUBLIC_URL + '/img/powByAva.png'} className=" h-16 w-40" alt="Logo" />
    </div>
  );
};

export default Footer;
