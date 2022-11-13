import React from "react";

const ManageProfiles = ({showUserEditIcon, setShowUserEditIcon}) => {
  return (
    <div onClick={() => setShowUserEditIcon(!showUserEditIcon)} className="font-montserrat hidden h-24 w-2/3 cursor-pointer items-center justify-center bg-primary text-center text-2xl uppercase leading-none tracking-widest text-white transition-all duration-300 hover:text-[1.6rem] md:flex">
      Manage Profiles
    </div>
  );
};

export default ManageProfiles;
