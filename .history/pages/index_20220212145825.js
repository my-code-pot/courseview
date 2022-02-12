import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import connectToMongo from "../util/mongo";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  client  = await connectToMongo();
  db = client.db("");
}