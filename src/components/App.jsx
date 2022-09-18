import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Shared-layout/Shared-layout";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/Movie-details";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Route >
        
    </Routes>
  );
};
