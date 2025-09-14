import React from 'react'

const page = async () => {
  interface Book {
    id: number,
    name: string,
    type: string,
    available: boolean,
  }
  let response = await fetch('https://simple-books-api.glitch.me/books')  // getting data
  let data: Book[] = await response.json()  // converting data from json to js object
  // Type is Book[] because data is in array and by using datatype now we will also get suggestions
  return (
    <main className='flex flex-col gap-3'>
      {data.map((booksData) => (
        // we used map function to apply loop
        <div key={booksData.id}>
          <h1>Id: {booksData.id}</h1>
          <h2>Name: {booksData.name}</h2>
          <p>Type: {booksData.type}</p>
        </div>
      ))}
    </main>
  )
}

export default page
