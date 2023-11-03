import Link from "next/link";
export default function Menu() {
  return (
    <nav className="m-10">
      <Link className="pr-4 underline" href="/" prefetch={false}>
        Forside
      </Link>
      <Link className="underline" href="/henry" prefetch={false}>
        Henry
      </Link>
    </nav>
  );
}
