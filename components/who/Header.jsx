import React from "react";

const Header = () => {
  return (
    <div className="group mt-12 flex w-24 cursor-pointer items-center justify-center pt-4 pb-12">
      <img className="absolute z-20 w-24" src="./assets/images/logos/demo.svg" alt="" />
      <img className="absolute z-10 w-9 transition-all duration-300 group-hover:scale-110" src="./assets/images/logos/icon_logo.svg" alt="" />
    </div>
  );
};

export default Header;
