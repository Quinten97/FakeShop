import styled from "@emotion/styled";
import React from "react";

interface InputProps {
  label: string;
  name: string;
}

const StyledLabel = styled.label`
  display: grid;
`;

export function Input(props: InputProps) {
  const { label, name } = props;
  return (
    <>
      <StyledLabel>
        <p>{label}</p>
        &nbsp;
        <input name={name} />
      </StyledLabel>
    </>
  );
}
