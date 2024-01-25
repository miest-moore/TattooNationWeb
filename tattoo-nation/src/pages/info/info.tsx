import Link from "next/link";

export default function Info() {
  return (
    <div>
      <h1>INFO PAGE</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/message/message">Message Page</Link>
        </li>
      </ul>
    </div>
  );
  }