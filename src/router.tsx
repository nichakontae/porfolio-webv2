import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/main_layout";


const AboutPage = lazy(() => import("./components/about/index"));
const ProjectsPage = lazy(() => import("./components/projects/index"));
const PhotographysPage = lazy(() => import("./components/photographs/index"));
const HomePage = lazy(() => import("./components/home/index"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<HomePage/>} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="photographs" element={<PhotographysPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
