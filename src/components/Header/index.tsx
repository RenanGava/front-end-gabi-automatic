'use client'
import { ButtonLogout } from "../ButtonLogout";
import { Container } from "./style";




export function Header(){


    return( 
    <Container>
        <h1>Send-Message</h1>
        <ButtonLogout/>
    </Container>
    )
}