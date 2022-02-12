import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import connectToMongo from "../util/mongo";

export default function Home(props) {
  console.log(props);
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
  const dept = fetch("/api/getDepts")
  return {
    props: {
      departments: departments.map((d) => ({
        id: d._id.toString(),
        title: d.name,
        courses: d.courses,
      })),
    },
  };
}
