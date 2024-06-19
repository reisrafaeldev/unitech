import styled from "styled-components";
import Load from "../../components/load";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.5rem;
      margin-left: 0.625rem;
    }

    svg {
      width: 1rem;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1.5rem 0;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    > img {
      width: 45%;
    }
  }
`;
export const ContainerCenter = styled.div`
  width: 100%;
  display: grid;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0 2rem;
  border-radius: 3px;
  background-color: rgb(0, 0, 0, 0.5);

  @media (max-width: 1200px) {
    margin-top: 2rem;
    padding: 0 1rem;
    width: 100%;
    display: grid;
    flex: 1;
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;

export const Center = styled.div`
  margin: 1rem 0;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #eafdf8;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const LoadContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 10rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overflow = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  overflow-y: auto;
  box-sizing: border-box;
  height: 100%;
  max-height: calc(100vh - 18rem);
  position: relative;

  &::-webkit-scrollbar {
    width: 0.3rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #074173;

    border-radius: 6.25rem;
  }
`;
