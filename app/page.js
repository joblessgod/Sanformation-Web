import Head from "next/head";

export default function Home() {
  function handleLogin() {}
  return (
    <>
      <Head>
        <meta
          name="twitter:card"
          content="Explore the future of web development, design, and code with Sanformation."
        />
        <meta name="twitter:site" content="@Sanformation" />
        <meta name="twitter:creator" content="@sanchit" />
        <meta name="twitter:image" content="https://images.com/image.jpg" />
      </Head>
      <main className="container mx-auto mt-8 w-full">Hello World</main>
    </>
  );
}
