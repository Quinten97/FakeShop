import { Outlet } from "react-router-dom";

export function MobileNav() {
  return (
    <>
      Mobile
      <div>
        <Outlet />
      </div>
    </>
  );
}
