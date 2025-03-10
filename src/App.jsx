import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() =>
  import("@/components/SharedLayout/SharedLayout")
);
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("@/pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("@/pages/FavoritesPage/FavoritesPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
