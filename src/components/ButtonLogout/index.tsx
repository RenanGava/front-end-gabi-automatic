import { UseAuth } from "@/context/AuthContext";
import { Container } from "./style";
import { MouseEvent } from "react";
import { redirect } from "next/navigation";



export function ButtonLogout(){

    const { signOut } = UseAuth()

    
    async function handleLogout(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault()

        signOut()

        redirect('/')
    }

    return(
        <Container
            onClick={handleLogout}
        >
            Logout
        </Container>
    )


}