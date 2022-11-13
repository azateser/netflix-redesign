import { useState } from "react";
import Data from "../data.json";

import AddProfile from "../components/who/AddProfile";
import Profiles from "../components/who/Profiles";
import Header from "../components/who/Header";
import Modal from "../components/who/Modal";
import ManageProfiles from "../components/who/ManageProfiles";

const who = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showProfileEditIcon, setShowProfileEditIcon] = useState(false);

  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showUserEditIcon, setShowUserEditIcon] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center md:justify-between">
      <Header />
      <div className="mt-6 flex flex-col items-center gap-12 text-white md:mt-0 lg:gap-16">
        <div className="text-4xl font-semibold md:text-6xl lg:text-7xl">Who's Watching?</div>
        <div className="grid grid-cols-2 gap-16 px-12 md:grid-cols-4 lg:p-0">
          <Profiles data={Data} showUserEditIcon={showUserEditIcon} />

          <AddProfile setShowAddModal={setShowAddModal} Data={Data.length} />
        </div>
      </div>

      <ManageProfiles showUserEditIcon={showUserEditIcon} setShowUserEditIcon={setShowUserEditIcon} />
      <Modal showProfileEditIcon={showProfileEditIcon} setShowProfileEditIcon={setShowProfileEditIcon} showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
    </div>
  );
};

export default who;
