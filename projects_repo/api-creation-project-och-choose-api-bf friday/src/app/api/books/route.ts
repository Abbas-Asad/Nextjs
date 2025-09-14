import { NextResponse } from "next/server"

export const GET = () => {

    // connect = database location
    // fetch books data
    
    return NextResponse.json([
        { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
        { id: 2, name: "1984", author: "George Orwell" },
        { id: 3, name: "Pride and Prejudice", author: "Jane Austen" },
      ])
}


// export const POST = () => {
//     // database connection
//     // insert data
  
//     return NextResponse.json({ message: "Success" });
//   };
  
