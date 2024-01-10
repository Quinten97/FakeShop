import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { HamburgerMenuSvg } from "../images/svgs/HamburgerMenuSvg";
import { CrossSvg } from "../images/svgs/CrossSvg";
import { useState } from "react";
import "./navStyles.css";

export function MobileNav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <nav className="mobileNav">
        <Link className="navLogo" to={"/home"}>
          FakeShop
        </Link>
        <button
          className="hamburgerButton"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          {hamburgerOpen ? <CrossSvg /> : <HamburgerMenuSvg />}
        </button>
        <div
          className={
            !hamburgerOpen ? "menuContainer menuClosed" : "menuContainer"
          }
        >
          <Link className="sidebarLink" to={"/home"}>
            Home
          </Link>
          <Link className="sidebarLink" to={"/home"}>
            Account
          </Link>
          <Link className="sidebarLink" to={"/home"}>
            Settings
          </Link>
          <Link className="sidebarLink" to={"/"}>
            Logout
          </Link>
        </div>
        {hamburgerOpen && (
          <div
            className={"windowTint"}
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          ></div>
        )}
      </nav>
      <div className="outletContainer">
        <Outlet />
      </div>
    </>
  );
}
