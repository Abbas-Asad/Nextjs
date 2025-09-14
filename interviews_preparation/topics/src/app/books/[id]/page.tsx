import React from 'react'

interface Params {
  params: {
    id: string;
  }
}

interface IBook {
  id: number;
  name: string;
  author: string;
  isbn: string;
  type: string;
  price: number;
  'current-stock': number;
  available: boolean;
}

const Page = async ({ params }: Params) => {

  // In props we get an object called params and in params we got the dynamic part of URL slug. In our case it's [id]. Then we can fetch whole data by just id which we got in params.

  const { id } = await params

  let res = await fetch(`https://simple-books-api.glitch.me/books/${id}`)

  let data: IBook = await res.json()

  console.log(data)

  // Q. if we are getting data from api so why we used params?
  // A. The answer is that we use params to get id and if we'll not extract id from params so how can we access single book data so we used params to get id then we use that id to make URL dynamic and to show a single product data.

  return (
    <main>

      <h1>Id: {data.id}</h1>
      {/*  according to me we use here id by fetching data not by using params beacuse we used params only to make dynamic route to fetch single product data  */}
      <h2>Name: {data.name}</h2>
      <p>Type: {data.type}</p>
      <p>Price: ${data.price}</p>

      {/* short code for this without making types and destructuring is just to write and pass props.params.id in dynamic part of URL and you will easily get your dynamic route */}

    </main>
  )
}

export default Page