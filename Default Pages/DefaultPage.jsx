import React from "react";
import defaultImage from "../src/assets/image.png";
import { LockKeyhole } from "lucide-react";

function DefaultPage() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <img className="w-[300px] h-[180px]" alt="" src={defaultImage} />
          <h1 className="text-4xl text-center font-light mt-6 text-pri-text">
            Download WhatsApp For Windows
          </h1>
          <div className="sub-heading text-center text-[12px] mt-4 text-sec-text">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </div>
          <a
            href="http://github.com/TusharSusar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="px-6 py-2 text-[12px] font-medium mt-6 rounded-full text-black cursor-pointer bg-btn-green"
            >
              Download
            </button>
          </a>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[10px] text-sec-text"><LockKeyhole size={15} />Your personal messages are end-to-end encrypted</p>
      </div>
    </section>
  );
}

export default DefaultPage;

export function StatusDefault() {
  return (
    <div>
      <h1 className="text-white">Status Default</h1>
    </div>
  )
}
export function ChannelsDefault() {
  return (
    <div>
      <h1 className='text-white'>Hello Channels</h1>
    </div>
  )
}
export function CommunityDefault() {
  return (
    <div>
      <h1 className='text-white'>Hello Community</h1>
    </div>
  )
}
export function SettingDefault() {
  return (
    <div>
      <h1 className='text-white'>Hello Settings</h1>
    </div>
  )
}
export function ProfileDefault() {
  return (
    <div>
      <h1 className='text-white'>Profile</h1>
      
    </div>
  )
}
