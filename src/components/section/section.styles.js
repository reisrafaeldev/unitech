import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background: rgb(83,83,171);
  background: radial-gradient(circle, rgba(83,83,171,0.4929621506805847) 0%, rgba(255,255,255,0.4313375008206407) 61%);
  input,
  textarea,
  select {
    font: inherit !important;
  }
`;
