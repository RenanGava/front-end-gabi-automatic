import { signIn } from "../../../auth"

export function Header(){

    async function handleLogin(){
        'use server'
        await signIn('credentials')
    
      }

    return <div>Ola Mundo</div>
}