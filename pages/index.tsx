import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage<{ posts }> = ({ posts }) => {
  return (
    <>
      hi hello
      <Link href="/other">Other heh</Link>
    </>
  );
};

export default Home;
