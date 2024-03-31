import Link from "next/link";

const BackButton = () => {
  return (
    <button className="rounded-md p-2 border-slate-500 border m-4">
      <Link href="/">👈Go Back</Link>
    </button>
  );
};

export default BackButton;
