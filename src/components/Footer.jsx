import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <Link href="/" prefetch={false}>
        Contact
      </Link>
      <Link href="/" prefetch={false}>
        Adress
      </Link>
    </div>
  );
}
