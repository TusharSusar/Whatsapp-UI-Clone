import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { SidebarContext, SidebarProvider } from "./context/Sidebarcontext";
import ChatList from "../pages/ChatList";
// import ChatBox from "../pages/ChatBox";
import Status from "../pages/Status";
import DefaultPage from "../Default Pages/DefaultPage";

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
        {sidebarItem == "STATUS" && (<Status/>)}
        {sidebarItem == "CHANNELS" && ""}
        {sidebarItem == "COMMUNITY" && ""}
        {sidebarItem == "SETTINGS" && ""}
        {sidebarItem == "PROFILE" && ""}
      </main>
    </>
  );
};

export default App;
