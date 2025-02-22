import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="catalog">Catalog Page</NavLink>
        <NavLink to="favorites">Favorites Page</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
