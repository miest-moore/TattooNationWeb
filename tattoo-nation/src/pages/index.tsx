import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/info/info">Info Page</Link>
        </li>
        <li>
          <Link href="/message/message">Message Page</Link>
        </li>
      </ul>
    </div>
  );
}
