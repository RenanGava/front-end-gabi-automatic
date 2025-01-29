"use client";
import { CreateUserProps, UseAuth } from "@/context/AuthContext";
import { FormEvent, useState } from "react";
import { Container, FormContent } from "./style";
import { ToastContainer } from 'react-toastify'
import { redirect } from "next/navigation";


interface UserLoginProps {
  email: string;
  password: string;
}

export function FormLogin() {
  const [login, setLogin] = useState<UserLoginProps>({} as UserLoginProps);
  const { signIn } = UseAuth();


  async function handleLogin(formEvent: FormEvent) {
    formEvent.preventDefault();
    const authenticated = await signIn({
      email: login.email,
      password: login.password,
    });

    if(authenticated){
      redirect('/dashboard')
    }
    
  }

  return (
    <Container>
      <FormContent onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button>Sign In</button>
      </FormContent>
      <ToastContainer/>
    </Container>
  );
}
