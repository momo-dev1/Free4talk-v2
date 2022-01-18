import Head from "next/head";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import ChatSection from "../Components/ChatSection";
export default function Home() {
  return (
    <div className="bg-primary-gray ">
      <Head>
        <title>
          Practice Speaking English Online Free - Language Practice Community
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-6xl mx-auto">
        <Header />
        <Hero />
        <ChatSection />
      </section>
    </div>
  );
}
