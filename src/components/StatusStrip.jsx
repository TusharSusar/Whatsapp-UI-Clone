import React, { useEffect, useState } from "react";

function StatusStrip({ ele, key }) {
  return (
    <div
      key={key}
      className="mystatus flex items-center gap-4 py-3.5 px-2 cursor-pointer rounded-[8px] hover:bg-chat-hover-bg"
    >
      <span className={`rounded-full p-1 ${!ele.viewed && 'border border-green-400'}`}>
        <img
          src={ele.imageUrl}
          alt="MyPic"
          className="w-10 h-10 rounded-full relative"
        />
      </span>
      {/* <div className="plus absolute right-0  bg-green-400 rounded-full">+</div> */}
      <div className="status textcontent flex-1">
        <div className="status-name">{ele.name}</div>
        <div className="status-sub-heading">
          {ele.day} at {ele.time}
        </div>
      </div>
    </div>
  );
}

export default StatusStrip;
