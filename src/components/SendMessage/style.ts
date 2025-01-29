import { theme } from "@/Global/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: fit-content;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;

  button {
    width: 100%;
    height: 40px;
    background-color: ${theme.buttons};
    border: 0;
    border-radius: 0.25rem;
    color: ${theme.textContent};
    font-weight: bold;
    font-size: 16px;
  }
`;
export const ContentMessage = styled.div`
  width: 100%;
  padding: 1rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.border};
    border-radius: 5px;
    min-height: 200px;

    span.phoneNumber {
      max-width: 250px;
      width: 100%;
      text-align: center;
      line-height: inherit;
      background-color: ${theme.buttons};
      line-height: 18.7;
      text-align: center;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    span.message {
      /* max-width: 600px; */
      padding: 1rem;
      text-align: left;
    }
  }

  div {
    height: 300px;
  }

  div + div {
    margin-top: 1rem;
  }
`;

export const SendMessageButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${theme.header};
  border: 0;
  border-radius: 0.25rem;
  color: ${theme.textTile};
  font-weight: bold;
  font-size: 16px;
`;
