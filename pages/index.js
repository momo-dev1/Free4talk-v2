import Head from "next/head";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import ChatSection from "../Components/ChatSection";

export default function Home({ groups }) {
  return (
    <div className="px-3 bg-primary-gray">
      <Head>
        <title>
          Practice Speaking English Online Free - Language Practice Community
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-6xl mx-auto">
        <Header />
        <Hero />
        <ChatSection groups={groups} />
      </section>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/groups");
  const data = await res.json();

  return {
    props: {
      groups: data,
    },
    revalidate: 10,
  };
}
