"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Container, Content, ContentMessage } from "./style";
import { api } from "@/utils/axios";
import { UseAuth } from "@/context/AuthContext";
import { UseMessage } from "@/context/MessagesContext";

interface IMessageProps {
  cpf: string;
  end: string;
  name: string;
  obs: string;
  situation: "A" | "P";
  start: string;
  tel: string;
  time: string;
}

export function SendFile() {
  const [file, setFile] = useState(null);
  // const [messages, setMessages] = useState<IMessageProps[] | null>(null);
  const { submitFile, pacientsMessages } = UseMessage();

  // @ts-ignore
  async function handleSubmitFile(e: FormEvent) {
    e.preventDefault();

    await submitFile(file);
  }

  return (
    <Container>
      <Content>
        <form action="" onSubmit={handleSubmitFile}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Digite seu Numero de Telefone"
          />
          <button type="submit">Conectar ao Whatsapp Web</button>
        </form>
      </Content>
      <ContentMessage>
        {pacientsMessages && pacientsMessages.map((message, index) => (
          <div className="container-pacient" key={index}>
            <div>
              <p>Nome: {message.name}</p>
              <p>CPF: {message.cpf}</p>
              <p>Telefone: {message.tel}</p>
              <p>Siutuacao: {message.situation === 'A'? 'Acompanhante': 'Paciente'}</p>
            </div>
            <div>
              <p>Ponto de espera: {message.obs}</p>
              <p>Ponto de Partida: {message.start}</p>
              <p>Ponto de Chegada: {message.end}</p>
              <p>Horario de Saida: {message.time}</p>
            </div>
          </div>
        ))}
      </ContentMessage>
    </Container>
  );
}
