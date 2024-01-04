import styled from "@emotion/styled";
import React from "react";

interface InputProps {
  text: string;
  type: "button" | "submit" | "reset";
}

const StyledButton = styled.button`
  width: 4rem;
  height: 2rem;
`;

export function Button(props: InputProps) {
  const { text, type } = props;
  return (
    <>
      <StyledButton type={type}>{text}</StyledButton>
    </>
  );
}
