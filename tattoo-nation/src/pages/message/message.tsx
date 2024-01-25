import Link from "next/link";

export default function Message() {
  return (
    <div>
      <h1>MESSAGE PAGE</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/info/info">Info Page</Link>
        </li>
      </ul>
    </div>
  );
  }