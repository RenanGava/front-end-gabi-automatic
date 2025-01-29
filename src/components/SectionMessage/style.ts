import { theme } from "@/Global/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.background};
  height: fit-content;
  min-height: 100vh;
  display: flex;
  /* flex-direction: col; */
  gap: 0.5rem;
  padding: 1rem;

  div.div {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    gap: 2rem;
  }
  
`;
