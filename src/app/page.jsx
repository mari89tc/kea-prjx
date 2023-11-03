export const dynamic = "force-dynamic"; //ssr
// export const dynamic = "force-static"; //ssg

export const metadata = {
  title: "Home",
  description: "A description",
};

export default async function Home() {
  const randomImage = await ranImage();
  return (
    <main className="m-10">
      <h1 className="pb-6">Her er en sød hund</h1>
      <img src={randomImage} alt="random hunde billede" />
    </main>
  );
}
async function ranImage() {
  const ranImg = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await ranImg.json();
  return data.message;
}
