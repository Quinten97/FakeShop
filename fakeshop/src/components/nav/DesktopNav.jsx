import { Outlet } from "react-router-dom";

export function DesktopNav() {
  return (
    <>
      Desktop
      <div>
        <Outlet />
      </div>
    </>
  );
}
