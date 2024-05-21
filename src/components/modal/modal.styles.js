import styled, { css } from "styled-components";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  width: 48.9375rem;
  min-height: 37.5rem;
  border-radius: 0.625rem;
  display: flex;
  height: 80%;
  flex-direction: column;
  @media (max-width: 768px) {
   width: 100%;
  }
  
`;
export const Overflow = styled.div`
  display: flex;
  flex: 1;
  border-radius: 2px;
  gap: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 9rem);
  position: relative;
  padding-right: 0.5rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e53d00;
    border-radius: 6.25rem;
  }
`;
export const ContainerHeader = styled.div`
  width: 100%;
  background: linear-gradient(to right, #121FCF 0%, #CF1512 61%);

  height: 5rem;
  border-radius: 0.625rem 0.625rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  p{
    flex: 1;
    margin-left: 1rem;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const CardIcon = styled.div`
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 0.2rem;
`;
export const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
 
`;


export const IconClose = styled(GrClose)`
  margin-left: 1rem;
  font-size: 2rem;
  color: #000;
`;

