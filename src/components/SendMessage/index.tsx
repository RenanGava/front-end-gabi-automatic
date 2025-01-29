"use client";
import { FormEvent, useState } from "react";
import { Container, Content, ContentMessage, SendMessageButton } from "./style";
import { UseAuth } from "@/context/AuthContext";
import { UseMessage } from "@/context/MessagesContext";

export function SendMessage() {
  const { messages, makeMessage, pacientsMessages, sendMessage } = UseMessage();

  const { user } = UseAuth();

  // @ts-ignore
  async function handleMakeMessages(e: FormEvent) {
    e.preventDefault();

    await makeMessage(pacientsMessages);
    console.log("Finalizou");
  }

  async function handleSendMessages(e: FormEvent) {
    e.preventDefault();

    sendMessage(messages)
    console.log("Finalizouuuuu");
  }

  return (
    <Container>
      <Content>
        <button onClick={handleMakeMessages} disabled={!pacientsMessages}>
          Criar Menssagens
        </button>
      </Content>
      <ContentMessage>
        <SendMessageButton 
          // disabled={!pacientsMessages}
          onClick={handleSendMessages}
        >
          
          Enviar Menssagens
        </SendMessageButton>
        {!!messages &&
          messages.map((message, index) => (
            <div key={index}>
              <span className="phoneNumber">{message.phoneNumber + ":"}</span>
              <span className="message"
                dangerouslySetInnerHTML={{__html: message.message}}/>
            </div>
          ))}
      </ContentMessage>
    </Container>
  );
}
