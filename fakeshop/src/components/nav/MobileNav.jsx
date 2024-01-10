import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { HamburgerMenuSvg } from "../images/svgs/HamburgerMenuSvg";
import { useState } from "react";

export function MobileNav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const Nav = styled.nav`
    background-color: lightblue;
    height: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center end;
  `;

  const StyledButton = styled.button`
    margin: 0rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid black;
    z-index: 1;
  `;

  const MenuContainer = styled.div`
    border: 1px solid black;
    background-color: white;
    position: absolute;
    width: 50%;
    height: 100%;
    margin-top: 51.25rem;
    overflow-x: hidden;
  `;

  return (
    <>
      <Nav>
        <Link to={"/home"}>Home</Link>
        <StyledButton onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <HamburgerMenuSvg />
        </StyledButton>
        {hamburgerOpen && <MenuContainer id="MenuContainer"></MenuContainer>}
      </Nav>
      <div className="outletContainer">
        <Outlet />
      </div>
    </>
  );
}
