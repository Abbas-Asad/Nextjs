import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await client.fetch(`*[_type == "homepage"]{
    heading,
    paragraph,
    "imageUrl": image.asset->url,
    buttonText
  }[0]`);

  // console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Text Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">{data.heading}</h1>
        <p className="text-lg text-gray-700 mb-6">{data.paragraph}</p>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mb-8">
        <Image
          src={data.imageUrl}
          height={300}
          width={300}
          alt="digital marketing"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-center mb-12">
        <Link
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          {data.buttonText}
        </Link>
      </div>
    </div>
  );
}