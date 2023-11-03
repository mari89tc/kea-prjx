import Link from "next/link";
export default async function Menu() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  return (
    <nav className="m-10">
      <Link className="pr-4 underline" href="/" prefetch={false}>
        Forside
      </Link>
      {pages.map((page) => {
        return (
          <Link className="pr-4 underline" key={page.id} href={`/dogs/${page.slug}`}>
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
}
