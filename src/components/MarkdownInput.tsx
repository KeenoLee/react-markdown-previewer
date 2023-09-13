import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  background-color: #fff;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (text: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

export default MarkdownInput;
