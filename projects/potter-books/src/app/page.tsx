import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
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

  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
  const data: IBook[] = await response.json()

  return (
    <main className="container mx-auto px-4 mt-[8.5rem] mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((booksData) => (
          <div key={booksData.number} className="bg-white rounded-lg shadow-md overflow-hidden  transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Link href={`/books/${booksData.number}`} className="block">
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={booksData.cover}
                  alt={`Cover of ${booksData.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{booksData.title}</h2>
                <p className="text-gray-600 text-sm">Released: {booksData.releaseDate}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Page