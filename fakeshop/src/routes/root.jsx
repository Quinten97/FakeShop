import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { DesktopNav } from "../components/Nav/DesktopNav";
import { MobileNav } from "../components/Nav/MobileNav";

export default function Root() {
  const isMobile = true;

  const Nav = styled.nav`
    color: yellow;
  `;

  return (
    <>
      <Nav>
        <Link to={"/home"}>Home</Link>
      </Nav>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </>
  );
}