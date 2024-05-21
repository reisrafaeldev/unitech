import styled, { css } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineXCircle } from "react-icons/hi";

export const Container = styled.button`
  width: 100%;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0.8rem 0;
  border-radius: 0.625rem;
  border: 0;
  padding: 0.5rem;

  background: ${(props) => props.isSelected ? "linear-gradient(to right, #121FCF 0%, #CF1512 61%)" : "rgba(39, 39, 39, 0.3)"};


  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
  svg {
    color: ${(props) => (props.isSelected ? "#20BF00" : "#000")};
  }
  p {
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  }

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const CardCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardLeft = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1rem;
`;

export const CardIcon = styled.div`
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 0.2rem;
`;

const card1 = css`
  background-color: #fff;
  transition: 0.5s;
  &:hover {
    background: rgba(229, 61, 0, 0.15);
  }
`;
const card2 = css``;
const card3 = css`
  background-color: #f57d7d;
  transition: 0.5s;
  &:hover {
    background: #fbbdbd;
  }
  svg {
    color: #fff;
  }
`;

export const IconOpen = styled(AiOutlineCheckCircle)`
  margin-left: 1rem;
  font-size: 2rem;
  color: red;
`;
export const IconClose = styled(HiOutlineXCircle)`
  margin-left: 1rem;
  font-size: 2rem;
  color: red;
`;
