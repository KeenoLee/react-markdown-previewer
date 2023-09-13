import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #ccc;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  &:hover {
    background-color: #555;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;
