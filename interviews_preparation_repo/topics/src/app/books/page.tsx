import Link from "next/link";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}


export default async function Home() {
  let response = await fetch('https://simple-books-api.glitch.me/books')
  let data: Book[] = await response.json()
  // Type is Book[] because data is in array and by using datatype now we will also get suggestions

  return (
    <main className="flex flex-col gap-5">
      {data.map((booksdata) => {
        return (
          <div key={booksdata.id} className="">
            <Link href={`/books/${booksdata.id}`}>
              <h1>Id: {booksdata.id}</h1>
            </Link>
            <h2>Name: {booksdata.name}</h2>
          </div>
        )
      })}
    </main>
  );
}