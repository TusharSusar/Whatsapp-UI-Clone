import { CirclePlus, EllipsisVertical, Plus, X } from "lucide-react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import dp from "../src/assets/Profilepic.jpeg";
import StatusStrip from "../src/components/StatusStrip";
import { data } from "../data/statusData";
import { viewed } from "../data/statusData";
import { muted } from "../data/statusData";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDSTATUS":
      return "ADDSTATUS";
    case "MORE":
      return "MORE";
    default:
      state;
  }
};

function Status() {
  const [statusIcon, statusDispatch] = useReducer(reducer, "NONE");
  const [showStatus, setStatus] = useState(false);

  const [udata, setData] = useState([]);
  const [uviewed, setViewed] = useState([]);
  const [umuted, setMuted] = useState([]);
  const [showMuted, setShowMuted] = useState(false);

  useEffect(() => {
    setData(data);
    setViewed(viewed);
    setMuted(muted);
  }, []);

  return (
    <section className="main-box px-5 py-1">
      <header className="w-full py-3 flex justify-between">
        <h1 className="main-box-heading">Status</h1>
        <div className="icons flex space-x-3">
          <button
            className={`p-2 rounded-full cursor-pointer ${
              statusIcon == "ADDSTATUS" ? "bg-icon-hover-bg" : "bg-transparent"
            }`}
            onClick={() => statusDispatch({ type: "ADDSTATUS" })}
          >
            <CirclePlus color="#FAFAFA" size={22} />
          </button>
          <button
            className={`p-2 rounded-full cursor-pointer ${
              statusIcon == "MORE" ? "bg-icon-hover-bg" : "bg-transparent"
            }`}
            onClick={() => statusDispatch({ type: "MORE" })}
          >
            <EllipsisVertical color="#FAFAFA" size={22} />
          </button>
        </div>
      </header>
      {/* <div className="mystatus flex items-center gap-4 mt-3">
        <img src={dp} alt="MyPic" className="w-10 h-10 rounded-full relative" />
        <div className="status textcontent flex-1">
          <div className="status-name">My Status</div>
          <div className="status-sub-heading">click to add status update</div>
        </div>
      </div>
      <div className="labels px-2 py-9">Recent</div>
      <div className="recent-status-list w-full h-[50%] flex flex-col justify-center overflow-auto">
        {data.map((ele, index) => (
          <StatusStrip key={index} ele={ele} />
        ))}
      </div> */}
      <div className="recent-status-list custom-scroll w-full h-[90%] flex flex-col overflow-y-auto">
        {/* My Status Section */}
        <div className="mystatus flex items-center gap-4 mt-3">
          <div className="relative">
            <img src={dp} alt="MyPic" className="w-10 h-10 rounded-full" />
            <div className="plus absolute bottom-0 right-0 rounded-full bg-green-400">
              <Plus color="#FAFAFA" size={16} strokeWidth={2.5} />
            </div>
          </div>

          <div className="status textcontent flex-1">
            <div className="status-name">My Status</div>
            <div className="status-sub-heading">Click to add status update</div>
          </div>
        </div>

        {/* Label */}
        <div className="labels px-2 py-6 text-green-400 text-sm font-semibold">
          Recent
        </div>

        {/* List of Statuses */}
        <div className="flex flex-col">
          {udata?.map((ele, index) => (
            <span key={index} onClick={() => setStatus(true)}>
              <StatusStrip ele={ele} />
            </span>
          ))}
        </div>
        <div className="labels px-2 py-6 text-green-400 text-sm font-semibold">
          Viewed
        </div>

        {/* List of Statuses */}
        <div className="flex flex-col">
          {uviewed?.map((ele, index) => (
            <span key={index} onClick={() => setStatus(true)}>
              <StatusStrip ele={ele} />
            </span>
          ))}
        </div>
        <div className="labels px-4 py-6 text-green-400 text-sm font-semibold flex justify-between">
          Muted
          <span
            className="labels text-sm cursor-pointer"
            onClick={() => setShowMuted(!showMuted)}
          >
            {showMuted ? "hide" : "show"}
          </span>
        </div>
        {showStatus && <DetailedStatus setStatus={setStatus} />}

        {/* List of Statuses */}
        <div className="flex flex-col">
          {showMuted &&
            umuted?.map((ele, index) => (
              <span key={index} onClick={() => setStatus(true)}>
                <StatusStrip ele={ele} />
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Status;

export const DetailedStatus = ({setStatus}) => {
  return (
    <>
      <div className="statusdetail fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.8)]">
        <span className="fixed right-0 cursor-pointer m-3" onClick={()=> setStatus(false)} ><X color="#FAFAFA" strokeWidth={3}/></span>
      </div>
    </>
  );
};
