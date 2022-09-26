import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import ChatSection from "../components/Chat/ChatSection";

export default function Home() {
  return (
    <div className="px-3 bg-primary-gray">
      <Head>
        <title>
          Practice Speaking English Online Free - Language Practice Community
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-6xl mx-auto ">
        <Header />
        <Hero />
        <ChatSection />
      </section>
    </div>
  );
}
