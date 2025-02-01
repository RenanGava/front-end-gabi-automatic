import Head from "next/head";
import { FormLogin } from "@/components/FormLogin";
export default async function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <FormLogin />
    </>
  );
}
