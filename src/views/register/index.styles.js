import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > img {
    margin: auto 3rem;
    @media (max-width: 1200px) {
        margin: 1rem 0;
        width: 15rem;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const ContainerCenter = styled.form`
  min-width: 20.875rem;
  background-color: rgb(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  margin: auto 0;
  gap: .5rem;
  height: fit-content;
display: flex;
flex-direction: column;
  
`;
export const ContainerImage = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) {
    display: none;
  }
`;
