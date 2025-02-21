import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="catalog">Catalog Page</NavLink>
      <NavLink to="favorites">Favorites Page</NavLink>
      <Outlet />
    </>
  );
};

export default SharedLayout;
