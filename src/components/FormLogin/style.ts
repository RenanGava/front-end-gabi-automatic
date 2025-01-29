import { theme } from '@/Global/theme'
import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.background};
`

export const FormContent = styled.form`
    width: 100%;
    max-width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`