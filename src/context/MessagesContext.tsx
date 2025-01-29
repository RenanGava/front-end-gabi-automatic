"use client";
import { api } from "@/utils/axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface FileProviderProps {
  children: ReactNode;
}

interface IMessageFormated {
  phoneNumber: string;
  message: string;
}

interface FileContextProps {
  pacientsMessages: IMessageProps[];
  messages: IMessageFormated[];
  timesArrival: string;
  submitFile(file: Blob): Promise<void>;
  makeMessage(data: IMessageProps[]): Promise<void>;
  sendMessage(data: ISendMessage[]): Promise<void>;
}

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

interface ISendMessage {
  phoneNumber: string;
  message: string;
}

const MessageContext = createContext({} as FileContextProps);

export function MessageContextProvider({ children }: FileProviderProps) {
  const [pacientsMessages, setPacientsMessages] = useState<
    IMessageProps[] | null
  >();
  const [timesArrival, setTimesArrival] = useState("");
  const [messages, setMessages] = useState<IMessageFormated[]>();

  // @ts-ignore
  async function submitFile(file: Blob) {
    const fileSend = new FormData();

    fileSend.append("file", file);

    const { data } = await api.post("/file/send", fileSend);
    console.log(data);

    setPacientsMessages([...data.resultMatriz]);
    setTimesArrival(data.timesArrival);
  }

  async function makeMessage(dataMessages: IMessageProps[]) {
    const { data } = await api.post("/wweb/make/wahtsapp", {
      timesArrival: timesArrival,
      pacients: dataMessages,
    });

    console.log(data);

    setMessages([...data]);
  }

  async function sendMessage(pacientsData: ISendMessage[]) {
    const { data } = await api.post("/wweb/send/wahtsapp", {
      pacients: pacientsData,
    });

    console.log(data);
    
    // data.sended && (setMessages([]), setPacientsMessages([]));
  }

  return (
    <MessageContext.Provider
      value={{
        pacientsMessages,
        messages,
        timesArrival,
        submitFile,
        makeMessage,
        sendMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function UseMessage() {
  return useContext(MessageContext);
}
