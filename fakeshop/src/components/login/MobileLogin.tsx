import React from "react";
import { Input } from "../input/Input";
import styled from "@emotion/styled";
import { Button } from "../button/StyledButton";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: lightBlue;
  padding: 2rem 4rem;
`;

export function MobileLogin() {
  return (
    <>
      <StyledForm>
        <Input label="Company:" name="company" />
        <Input label="Name:" name="name" />
        <Input label="Email:" name="email" />
        <Link to="/home">
          <Button text="Login" type="submit" />
        </Link>
      </StyledForm>
    </>
  );
}
