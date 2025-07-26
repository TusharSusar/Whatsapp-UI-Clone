import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/Sidebarcontext";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <div className="contect w-full h-[100dvh] bg-pri-bg">
          <Sidebar />
        </div>
      </SidebarProvider>
    </>
  );
};

export default App;
