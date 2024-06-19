import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height || "3.0625rem"};

  font-size: 0.8125rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center ;
  gap: 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  transition: 0.2s;
  color: #fff;
  background: #074173;
  font-size: 1rem;
  &:hover {
    opacity: 0.5;
  }
`;
