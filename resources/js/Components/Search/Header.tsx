import React from "react";
import samiFlag from "../../../images/sami_flag.png";
import norwegianFlag from "../../../images/norwegian_flag.png";
import { trans } from "matice";

const Header = () => (
    <div className="items-center justify-center hidden pt-10 md:flex">
        <img
            src={samiFlag}
            className="h-8 mx-3 transform rounded-full -rotate-12 "
            alt="sami flag"
        />
        <h1 style={{ fontFamily: "lobster" }} className="text-4xl">
            {trans("Search.header")}
        </h1>
        <img
            src={norwegianFlag}
            className="h-8 mx-3 transform rounded-full rotate-12"
            alt="sami flag"
        />
    </div>
);

export default Header;
