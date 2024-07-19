import { Outlet } from "react-router-dom";
import { Topbar } from "..";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <>
      <header className="absolute left-0 top-0 flex w-full justify-center z-20">
        <Topbar />
      </header>
      <main  className="flex flex-col w-full justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default index;
