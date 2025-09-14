
export default async function Home() {
  let response = await fetch('http://localhost:3000/api/books')
  let data = await response.json()
  
  console.log(data)
  return (
    <>

    </>
  )
}