export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: "Loves ${data.favouriteColor}",
  };
}

import Image from "next/image";

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(image);

  return (
    <Image
      className="w-auto h-auto"
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
      alt="A cute dog"
      width={3024}
      height={4032}
      priority={true}
      sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
    />
    // disables lazy load
  );
}
