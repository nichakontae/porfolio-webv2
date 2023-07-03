import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading/loading";

const MainLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default MainLayout;
