import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color:  rgba(0, 0, 0, 0.3);
  /* background: linear-gradient(260deg, rgba(2,0,36,1) 0%, rgba(7,0,66,1) 16%, rgba(107,148,237,1) 62%, rgba(198,219,245,1) 84%, rgba(209,242,255,1) 100%); */
  input,
  textarea,
  select {
    font: inherit !important;
  }
`;
