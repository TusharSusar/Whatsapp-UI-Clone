import React from "react";
import defaultImage from "../src/assets/image.png";
import { LockKeyhole } from "lucide-react";

function DefaultPage() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <img className="w-[300px] h-[180px]" alt="" src={defaultImage} />
          <h1 className="default-heading">Download WhatsApp For Windows</h1>
          <div className="sub-heading">
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
              className="px-6 py-2 text-[14px] font-medium mt-6 rounded-full text-black cursor-pointer bg-btn-green"
            >
              Download
            </button>
          </a>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}

export default DefaultPage;

export function StatusDefault() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <span>
            <svg
              viewBox="0 0 24 24"
              height="64"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              class="x1vef352 x1rg5ohu"
              fill="none"
            >
              <title>status-filled-refreshed</title>
              <path
                d="M13.5628 3.1366C13.6587 2.5927 14.1794 2.22462 14.711 2.37435C15.7905 2.67838 16.8135 3.16253 17.736 3.80854C18.9323 4.64621 19.9305 5.73571 20.6606 7.00047C21.3907 8.26523 21.8349 9.67454 21.962 11.1294C22.0601 12.2513 21.9677 13.3793 21.6911 14.4662C21.5549 15.0014 20.9758 15.2682 20.4568 15.0792C19.9378 14.8903 19.677 14.317 19.7998 13.7785C19.9843 12.9693 20.0422 12.1343 19.9696 11.3035C19.8679 10.1396 19.5126 9.01215 18.9285 8.00035C18.3444 6.98854 17.5458 6.11694 16.5888 5.44681C15.9057 4.96841 15.1536 4.60097 14.3606 4.35607C13.8329 4.19311 13.4669 3.68049 13.5628 3.1366Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                d="M18.8944 17.785C19.3175 18.14 19.3759 18.7749 18.9804 19.1604C18.1774 19.9433 17.2466 20.5872 16.2259 21.0631C14.9023 21.6802 13.4597 22 11.9993 21.9999C10.5389 21.9998 9.09633 21.6798 7.77287 21.0625C6.7522 20.5864 5.82149 19.9424 5.01855 19.1594C4.62314 18.7739 4.68167 18.1389 5.10479 17.784C5.52792 17.429 6.15484 17.4898 6.55976 17.8653C7.16828 18.4297 7.86245 18.8974 8.61829 19.25C9.67707 19.7438 10.8312 19.9998 11.9994 19.9999C13.1677 19.9999 14.3218 19.7441 15.3807 19.2504C16.1366 18.898 16.8308 18.4304 17.4394 17.8661C17.8444 17.4906 18.4713 17.4299 18.8944 17.785Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                d="M3.54277 15.078C3.02379 15.2669 2.4447 15.0001 2.30857 14.4648C2.03215 13.378 1.9399 12.2501 2.03806 11.1283C2.16533 9.67358 2.60965 8.26441 3.33978 6.9998C4.06991 5.7352 5.06815 4.64584 6.26432 3.80828C7.1868 3.16237 8.20975 2.6783 9.28915 2.37431C9.82075 2.22459 10.3414 2.59268 10.4373 3.13657C10.5332 3.68047 10.1672 4.19308 9.6395 4.35604C8.84657 4.60091 8.09458 4.96828 7.41146 5.4466C6.45452 6.11664 5.65593 6.98813 5.07183 7.99982C4.48772 9.0115 4.13226 10.1388 4.03045 11.3026C3.95776 12.1334 4.01559 12.9683 4.19998 13.7774C4.3227 14.3159 4.06175 14.8892 3.54277 15.078Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0001 18C15.3138 18 18.0001 15.3137 18.0001 12C18.0001 8.68628 15.3138 5.99999 12.0001 5.99999C8.68635 5.99999 6.00006 8.68628 6.00006 12C6.00006 15.3137 8.68635 18 12.0001 18Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
            </svg>
          </span>
          <h1 className="default-heading">Share Status Update</h1>
          <div className="sub-heading">
            Share photos, videos and text that disappear after 24 hours.
          </div>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}
export function ChannelsDefault() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <span>
            <svg
              viewBox="0 0 24 24"
              height="64"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              class="x1vef352 x1rg5ohu"
              fill="none"
            >
              <title>newsletter</title>
              <path
                d="M21.9215 10.6469C21.3207 6.08949 17.5555 2.45561 12.9892 2.04404C7.06099 1.50197 2.16422 6.05937 2.05407 11.982C2.01402 14.1101 2.82514 15.9371 3.23571 16.7201L2.04406 20.6651C1.81374 21.4281 2.52472 22.1408 3.28578 21.9099L7.17115 20.7455C8.6532 21.5686 10.3155 22.0002 12.0178 22.0002C17.9661 22.0002 22.7126 16.7602 21.9115 10.6469H21.9215ZM8.06238 14.6823C8.33275 15.0838 8.30271 15.6259 7.96224 15.9672C7.51162 16.429 6.76058 16.3386 6.40008 15.7966C5.66907 14.7124 5.23848 13.3974 5.23848 11.992C5.23848 10.5867 5.69911 9.17125 6.49021 8.057C6.84069 7.56512 7.5717 7.53501 8.0023 7.96665C8.35278 8.318 8.38282 8.86007 8.10244 9.2616C7.56169 10.0346 7.25126 10.9782 7.25126 11.992C7.25126 13.0059 7.56169 13.9093 8.08241 14.6723L8.06238 14.6823ZM12.0679 13.4978C11.2368 13.4978 10.5658 12.8252 10.5658 11.992C10.5658 11.1588 11.2368 10.4863 12.0679 10.4863C12.8991 10.4863 13.57 11.1588 13.57 11.992C13.57 12.8252 12.8991 13.4978 12.0679 13.4978ZM17.5255 15.9471C17.175 16.439 16.444 16.4691 16.0234 16.0375C15.6729 15.6861 15.6429 15.1441 15.9232 14.7425C16.464 13.9696 16.7844 13.0159 16.7844 12.0021C16.7844 10.9882 16.454 10.0145 15.9032 9.24152C15.6128 8.82995 15.6328 8.27784 15.9833 7.91646C16.4039 7.49485 17.1249 7.51493 17.4854 8.00681C18.3065 9.1311 18.7872 10.5064 18.7872 12.0121C18.7872 13.5179 18.3166 14.8429 17.5255 15.9572V15.9471Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
            </svg>
          </span>
          <h1 className="default-heading">Discover Channels</h1>
          <div className="sub-heading">
            Entertainment, sports, news, lifestyle, people and more. Follow the
            channels that interest you
          </div>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}
export function CommunityDefault() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <span>
            <svg
              viewBox="0 0 24 24"
              height="64"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              class="x1vef352 x1rg5ohu"
              fill="none"
            >
              <title>community-filled-refreshed</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.66933 12.2512C10.2819 12.1029 11.0497 12 12 12C12.9503 12 13.718 12.1029 14.3307 12.2512C14.9723 12.4065 15.6758 12.6891 16.2609 13.1293C16.8493 13.572 17.3782 14.2245 17.4979 15.1068C17.5601 15.5661 17.5363 16.5993 17.5208 17.1232C17.4988 17.8762 16.8803 18.4615 16.1401 18.4615H7.8599C7.1197 18.4615 6.50123 17.8762 6.47914 17.1232C6.46377 16.5993 6.43991 15.5661 6.50218 15.1068C6.6218 14.2245 7.1507 13.572 7.73908 13.1293C8.32419 12.6891 9.02768 12.4065 9.66933 12.2512Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.15899 12.0496C5.831 12.0181 5.4711 12 5.07692 12C4.20582 12 3.50202 12.0882 2.94047 12.2153C2.3523 12.3485 1.70742 12.5906 1.17107 12.9679C0.631727 13.3474 0.14689 13.9067 0.0372512 14.663C-0.0198334 15.0567 0.0020426 15.9423 0.0161272 16.3913C0.0363762 17.0368 0.603305 17.5385 1.28183 17.5385H4.66434C4.64768 17.4202 4.63737 17.2998 4.63378 17.1773C4.62053 16.7253 4.58502 15.506 4.67276 14.8588C4.84072 13.6199 5.47411 12.6934 6.15899 12.0496Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.841 12.0496C18.169 12.0181 18.5289 12 18.9231 12C19.7942 12 20.498 12.0882 21.0595 12.2153C21.6477 12.3485 22.2926 12.5906 22.8289 12.9679C23.3682 13.3474 23.8531 13.9067 23.9627 14.663C24.0198 15.0567 23.998 15.9423 23.9838 16.3913C23.9636 17.0368 23.3967 17.5385 22.7182 17.5385H19.3357C19.3523 17.4202 19.3626 17.2998 19.3662 17.1773C19.3794 16.7253 19.415 15.506 19.3272 14.8588C19.1593 13.6199 18.5259 12.6934 17.841 12.0496Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6154 7.84614C16.6154 6.31674 17.8552 5.0769 19.3846 5.0769C20.9141 5.0769 22.1538 6.31674 22.1538 7.84614C22.1538 9.37558 20.9141 10.6154 19.3846 10.6154C17.8552 10.6154 16.6154 9.37558 16.6154 7.84614Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.30768 7.38463C8.30768 5.34542 9.96082 3.69232 12 3.69232C14.0392 3.69232 15.6923 5.34542 15.6923 7.38463C15.6923 9.4238 14.0392 11.0769 12 11.0769C9.96082 11.0769 8.30768 9.4238 8.30768 7.38463Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.84616 7.84614C1.84616 6.31674 3.08599 5.0769 4.61539 5.0769C6.14479 5.0769 7.38462 6.31674 7.38462 7.84614C7.38462 9.37558 6.14479 10.6154 4.61539 10.6154C3.08599 10.6154 1.84616 9.37558 1.84616 7.84614Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
            </svg>
          </span>
          <h1 className="default-heading">Create communities</h1>
          <div className="sub-heading">
            Bring members together in topic-based groups and easily send them
            admin announcements.
          </div>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}
export function SettingDefault() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <span>
            <svg
              viewBox="0 0 24 24"
              height="64"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              class="x1vef352 x1rg5ohu"
              fill="none"
            >
              <title>settings-filled-refreshed</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.66248 21.55C9.98748 21.85 10.375 22 10.825 22H13.175C13.625 22 14.0125 21.85 14.3375 21.55C14.6625 21.25 14.8583 20.8833 14.925 20.45L15.15 18.8C15.35 18.7167 15.55 18.6167 15.75 18.5C15.95 18.3833 16.1416 18.2583 16.325 18.125L17.825 18.775C18.2416 18.9583 18.6583 18.975 19.075 18.825C19.4916 18.675 19.8166 18.4083 20.05 18.025L21.25 15.975C21.4833 15.5917 21.55 15.1833 21.45 14.75C21.35 14.3167 21.125 13.9583 20.775 13.675L19.45 12.675C19.4833 12.5583 19.5 12.4458 19.5 12.3375V11.6625C19.5 11.5542 19.4916 11.4417 19.475 11.325L20.8 10.325C21.15 10.0417 21.375 9.68333 21.475 9.25C21.575 8.81667 21.5083 8.40833 21.275 8.025L20.1 5.975C19.8666 5.59167 19.5416 5.325 19.125 5.175C18.7083 5.025 18.2916 5.04167 17.875 5.225L16.325 5.875C16.1416 5.74167 15.9541 5.61667 15.7625 5.5C15.5708 5.38333 15.3666 5.28333 15.15 5.2L14.925 3.55C14.8583 3.11667 14.6625 2.75 14.3375 2.45C14.0125 2.15 13.625 2 13.175 2H10.825C10.375 2 9.98748 2.15 9.66248 2.45C9.33748 2.75 9.14165 3.11667 9.07498 3.55L8.84998 5.2C8.64998 5.28333 8.44998 5.38333 8.24998 5.5C8.04998 5.61667 7.85831 5.74167 7.67498 5.875L6.12498 5.225C5.70831 5.04167 5.29165 5.025 4.87498 5.175C4.45831 5.325 4.13331 5.59167 3.89998 5.975L2.72498 8.025C2.49165 8.40833 2.42498 8.81667 2.52498 9.25C2.62498 9.68333 2.84998 10.0417 3.19998 10.325L4.52498 11.325C4.50831 11.4417 4.49998 11.5542 4.49998 11.6625V12.3375C4.49998 12.4458 4.50831 12.5583 4.52498 12.675L3.19998 13.675C2.84998 13.9583 2.62498 14.3167 2.52498 14.75C2.42498 15.1833 2.49165 15.5917 2.72498 15.975L3.89998 18.025C4.13331 18.4083 4.45831 18.675 4.87498 18.825C5.29165 18.975 5.70831 18.9583 6.12498 18.775L7.67498 18.125C7.85831 18.2583 8.04581 18.3833 8.23748 18.5C8.42915 18.6167 8.63331 18.7167 8.84998 18.8L9.07498 20.45C9.14165 20.8833 9.33748 21.25 9.66248 21.55ZM12 15C12.8286 15 13.5357 14.7071 14.1214 14.1214C14.7071 13.5357 15 12.8286 15 12C15 11.1714 14.7071 10.4643 14.1214 9.87857C13.5357 9.29286 12.8286 9 12 9C11.1571 9 10.4464 9.29286 9.86786 9.87857C9.28929 10.4643 9 11.1714 9 12C9 12.8286 9.28929 13.5357 9.86786 14.1214C10.4464 14.7071 11.1571 15 12 15Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
            </svg>
          </span>
          <h1 className="default-heading">Settings</h1>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}
export function ProfileDefault() {
  return (
    <section className="side-box flex justify-center">
      <div className="default-parent w-[80%] h-full flex items-center justify-center relative">
        <div className="default-content w-full flex flex-col items-center">
          <span>
            <svg
              viewBox="0 0 24 24"
              height="64"
              width="64"
              preserveAspectRatio="xMidYMid meet"
              class="x1vef352 x1rg5ohu"
              fill="none"
            >
              <title>account-circle</title>
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                fill="rgba(255, 255, 255, .2)"
              ></path>
            </svg>
          </span>
          <h1 className="default-heading">Profile</h1>
        </div>
        <p className="encryption-heading flex gap-2 absolute bottom-8 text-[14px] text-sec-text">
          <LockKeyhole size={15} />
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </section>
  );
}
