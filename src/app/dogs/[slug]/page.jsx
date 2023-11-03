//app/dogs/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `Is ${data.age}`,
  };
}
export default async function Dog({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();
  const { name, favouriteColor, age, image, width, height } = data;

  return (
    <main className="m-10">
      <h1>Name: {name}</h1>
      <p>Favourite Colour: {favouriteColor ? favouriteColor : "No favourite colour"}</p>
      {/* {favouriteColor && <p>Color: {favouriteColor}</p>} ser om den overhovedet har en farve, og spytter det ud hvis den har */}
      <p>Age:{age}</p>
      <Image
        className="pt-6"
        src={image.url}
        alt="A cute dog"
        width={image.width}
        height={image.height}
        priority={true}
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
      ></Image>
    </main>
  );
}
