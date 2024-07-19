import { Outlet } from "react-router-dom";
import { Topbar } from "..";

const index = () => {
  return (
    <>
      <header className="absolute left-0 top-0 flex w-full justify-center">
        <Topbar />
      </header>
      <main className="flex w-full justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default index;
