import { theme } from "@/Global/theme";
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    height: fit-content;
`

export const Content = styled.div`
    width: 100%;
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
export const ContentMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    div.container-pacient{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: ${theme.textContent};
        padding: 1rem;

        div{
            line-height: 24px;
            p {
                color: ${theme};
            }

        }
    }

`