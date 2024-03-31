import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <button className="rounded-md p-2 border-slate-500 border m-4">
        <Link href="/pokemon">Pokemon Search</Link>
      </button>
      <button className="rounded-md p-2 border-slate-500 border m-4">
        <Link href="/users">Users Search</Link>
      </button>
    </>
  );
}
