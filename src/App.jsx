import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { SidebarContext, SidebarProvider } from "./context/Sidebarcontext";
import ChatList from "./components/ChatList";
import ChatBox from "./components/ChatBox";

const App = () => {
  const { sidebarItem } = useContext(SidebarContext);
  return (
    <>
      <main className="contect flex w-full h-[100dvh] bg-pri-bg">
        <Sidebar />
        {sidebarItem == "CHAT" && (
          <>
            <ChatList />
            <ChatBox />
          </>
        )}
        {sidebarItem == "STATUS" && ""}
        {sidebarItem == "CHANNELS" && ""}
        {sidebarItem == "COMMUNITY" && ""}
      </main>
    </>
  );
};

export default App;
