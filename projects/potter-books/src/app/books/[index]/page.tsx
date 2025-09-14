import React from 'react';
import Image from 'next/image';

interface IBook {
  number: number,
  title: string,
  originalTitle: string,
  releaseDate: string,
  description: string,
  pages: number,
  cover: string,
  index: number,
}

const Page = async ({ params }: { params: Promise<{ index: string }> }) => {
  const { index } = await params;
  const adjustedIndex = parseInt(index) - 1;

  const response = await fetch(`https://potterapi-fedeperin.vercel.app/en/books?index=${adjustedIndex}`);
  const data: IBook = await response.json();

  return (
    <div className="container mx-auto px-4 mt-[8.5rem] mb-24">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 lg:w-1/4 relative">
          <Image
            src={data.cover}
            alt={`Cover of ${data.title}`}
            layout="responsive"
            width={300}
            height={450}
            className="object-cover"
          />
        </div>
        <div className="p-6 md:p-8 w-full md:w-2/3 lg:w-3/4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Book {data.number}</div>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="mt-2 text-gray-600"><span className="font-semibold">Original Title:</span> {data.originalTitle}</p>
          <p className="mt-2 text-gray-600"><span className="font-semibold">Release Date:</span> {data.releaseDate}</p>
          <p className="mt-2 text-gray-600"><span className="font-semibold">Pages:</span> {data.pages}</p>
          <p className="mt-4 text-gray-700">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;