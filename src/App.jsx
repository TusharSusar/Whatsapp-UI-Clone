import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { SidebarContext } from "./context/Sidebarcontext";
import ChatList from "../pages/ChatList";
// import ChatBox from "../pages/ChatBox";
import Status from "../pages/Status";
import DefaultPage, {
  ChannelsDefault,
  CommunityDefault,
  ProfileDefault,
  SettingDefault,
  StatusDefault,
} from "../Default Pages/DefaultPage";
import Channels from "../pages/Channels";
import Community from "../pages/Community";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

const App = () => {
  const { sidebarItem } = useContext(SidebarContext);
  return (
    <>
      <main className="contect flex w-full h-[100dvh] bg-pri-bg">
        <Sidebar />
        {sidebarItem == "CHAT" && (
          <>
            <ChatList />
            <DefaultPage />
          </>
        )}
        {sidebarItem == "STATUS" && (
          <>
            <Status />
            <StatusDefault />
          </>
        )}
        {sidebarItem == "CHANNELS" && (
          <>
            <Channels />
            <ChannelsDefault />
          </>
        )}
        {sidebarItem == "COMMUNITY" && (
          <>
            <Community />
            <CommunityDefault />
          </>
        )}
        {sidebarItem == "SETTINGS" && (
          <>
            <Settings />
            <SettingDefault />
          </>
        )}
        {sidebarItem == "PROFILE" && (
          <>
            <Profile />
            <ProfileDefault />
          </>
        )}
      </main>
    </>
  );
};

export default App;
