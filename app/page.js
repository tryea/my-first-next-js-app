import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/icon.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* This is not good since it will remove us from SPA benefit */}
      {/* <a href="/about">About Us</a> */}
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
