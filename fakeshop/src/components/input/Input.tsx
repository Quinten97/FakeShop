import styled from "@emotion/styled";
import React from "react";

interface InputProps {
  label: string;
  name: string;
}

const StyledLabel = styled.label`
  display: grid;
  width: 150%;
`;

const StyledInput = styled.input`
  height: 2rem;
`;

export function Input(props: InputProps) {
  const { label, name } = props;
  return (
    <>
      <StyledLabel>
        <p>{label}</p>
        &nbsp;
        <StyledInput name={name} />
      </StyledLabel>
    </>
  );
}
