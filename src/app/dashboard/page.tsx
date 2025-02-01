import Head from "next/head";
import { useRouter } from "next/navigation";
import { FormLogin } from "@/components/FormLogin";
import { api } from "@/utils/axios";
import { SectionMessage } from "@/components/SectionMessage";
import { Header } from "@/components/Header";

export default async function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <SectionMessage />
    </>
  );
}
