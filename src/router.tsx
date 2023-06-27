import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
