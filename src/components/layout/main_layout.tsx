import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading/loading";
import Navbar from "../navbar";
import { Box } from "@mui/material";
// import Navbar from "../navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box paddingTop={"70px"}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default MainLayout;
