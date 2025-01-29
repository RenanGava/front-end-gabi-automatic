import { theme } from "@/Global/theme";
import styled from "styled-components";


export const Content = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 1rem;


    button{
        width: 100%;
        height: 40px;
        background-color: ${theme.buttons};
        border: 0;
        border-radius: 0.25rem;
        color: ${theme.textContent};
        font-weight: bold;
        font-size: 16px;
    }


    input[type=text]{
        width: 100%;
        height: 40px;
        text-align: center;
        font-size: 16px;


        &::placeholder{
            font-weight: bold;
            color: ${theme.textTile};
        }
    }

    input.code{
        width: 400px;
        font-size: 18px;
        font-weight: bold;
        color: ${theme.textTile};
        letter-spacing: 3px;
    }


`