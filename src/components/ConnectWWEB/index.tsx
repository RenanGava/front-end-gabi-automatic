"use client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { Content } from "./style";
import { api } from "@/utils/axios";
import { UseAuth } from "@/context/AuthContext";

export function ConnectWWEB() {
  const [number, setNumber] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const { user } = UseAuth();

  
  async function handleGetVerifyCode(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const res = await api.post('/wweb/conect/wahtsapp', {
      phoneNumber: number
    })
    
    setVerifyCode(res.data.code)
  }

  return (
    <Content>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Digite seu Numero de Telefone"
      />
      <button onClick={handleGetVerifyCode}>Conectar ao Whatsapp Web</button>

      {verifyCode != "" && (
        <input type="text" className="code" disabled value={verifyCode} />
      )}
    </Content>
  );
}
