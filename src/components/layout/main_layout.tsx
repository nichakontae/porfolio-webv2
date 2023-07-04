import  { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading/loading";
import Navbar from "../navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
