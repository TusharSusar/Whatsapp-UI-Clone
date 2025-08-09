import React, { useState } from "react";
import dp from "../src/assets/Profilepic.jpeg";
import { Pencil, SendHorizontal } from "lucide-react";

function Profile() {
  const [name, setName] = useState("Jadu");
  const [about, seAbout] = useState("Hey there! I am using WhatsApp.");
  const [isDisabledName, setIsDisabledName] = useState(true);
  const [isDisabledAbout, setIsDisabledAbout] = useState(true);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAbout = (e) => {
    seAbout(e.target.value);
  };

  const handleClickName = () => {
    setIsDisabledName((prev) => !prev);
  };

  const handleClickAbout = () => {
    setIsDisabledAbout((prev) => !prev);
  };

  return (
    <section className="main-box px-6 select-none">
      <header className="w-full  py-3">
        <h1 className="text-pri-text text-[20px] font-semibold">Profile</h1>
      </header>
      <div className="profile-img flex justify-center my-10">
        <img src={dp} alt="" draggable={false} className="w-32 h-32 rounded-full object-cover" />
      </div>
      <div className="name-section px-3">
        <div className="name-heading text-sec-text">Your Name</div>
        <div
          className={`edit-container w-full my-6 flex items-center justify-center space-x-3 ${
            !isDisabledName && "border-b-2 border-green-500"
          }`}
        >
          <input
            type="text"
            value={name}
            disabled={isDisabledName}
            onChange={handleChangeName}
            className="flex-1 text-pri-text text-[18px] py-2 outline-none"
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleClickName}
          >
            {isDisabledName ? (
              <Pencil color="rgba(255, 255, 255, .6)" size={20} />
            ) : (
              <SendHorizontal color="#FAFAFA" size={20} />
            )}
          </button>
        </div>
        <div className="sub-heading text-start text-[14px]">
          This is not your username or PIN. This name will be visible to your
          WhatsApp contacts.
        </div>
        <div className="name-heading mt-10 text-sec-text">Your Name</div>
        <div
          className={`edit-container w-full my-6 flex items-center justify-center space-x-3 ${
            !isDisabledAbout && "border-b-2 border-green-500"
          }`}
        >
          <input
            type="text"
            value={about}
            disabled={isDisabledAbout}
            onChange={handleChangeAbout}
            className="flex-1 text-pri-text text-[18px] py-2 outline-none"
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleClickAbout}
          >
            {isDisabledAbout ? (
              <Pencil color="rgba(255, 255, 255, .6)" size={20} />
            ) : (
              <SendHorizontal color="#FAFAFA" size={20} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
