import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Shared-layout/Shared-layout";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        </Route >
        
    </Routes>
  );
};
