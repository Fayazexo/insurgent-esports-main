import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <head>
        <title>Chipaaaaaa</title>
      </head>
      <h1>Come into the mainkar chipa</h1>
      <Image
        width="1170px"
        height="1447px"
        src="/images/nafiurrn.jpg"
        alt="nafirurn"
      ></Image>
      <div>
        <Link href="/players/nafiur">
          <a>Nafiur</a>
        </Link>
      </div>
    </>
  );
}
