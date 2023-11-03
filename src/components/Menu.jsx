import Link from "next/link";
export default function Menu() {
  return (
    <nav>
      <Link href="/" prefetch={false}>
        Forside
      </Link>
      <Link href="/henry" prefetch={false}>
        Henry
      </Link>
    </nav>
  );
}
