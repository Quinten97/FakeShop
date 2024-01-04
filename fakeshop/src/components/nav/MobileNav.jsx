import { Outlet } from "react-router-dom";

export function MobileNav() {
  return (
    <>
      Nav
      <div className="outletContainer">
        <Outlet />
      </div>
    </>
  );
}
