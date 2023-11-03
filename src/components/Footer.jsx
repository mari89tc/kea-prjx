import Link from "next/link";
export default function Footer() {
  return (
    <div className="m-10">
      <Link className="pr-7" href="/" prefetch={false}>
        Contact
      </Link>
      <Link href="/" prefetch={false}>
        Adress
      </Link>
    </div>
  );
}
