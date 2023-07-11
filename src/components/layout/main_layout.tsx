import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../loading/loading";
import Navbar from "../navbar";
import { Container } from "@mui/material";
import { IntroEachPage } from "../../resources/intro_each_page";
import { IntroEachPageType } from "../../types/intro";
import Intro from "../utils/intro";

const MainLayout = () => {
  const introData: IntroEachPageType[] = IntroEachPage;
  const location = useLocation();
  console.log(location.pathname);
  const filteredItem: IntroEachPageType[] = introData.filter(
    (item) => item.path == location.pathname
  );

  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: "10rem" }} maxWidth="md">
        <Intro data={filteredItem[0]} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MainLayout;
