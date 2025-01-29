"use client";
import { ConnectWWEB } from "../ConnectWWEB";
import { SendFile } from "../SendFile";
import { Container } from "./style";
import { SendMessage } from "../SendMessage";

export function SectionMessage() {
  return (
    <Container>
        <div className="div">
          <ConnectWWEB />
          <SendFile />
        </div>
        <SendMessage/>
    </Container>
  );
}
