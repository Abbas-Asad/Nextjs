import { NextResponse } from "next/server"

export const GET = () => {

    // connect = database location
    // fetch books data
    
    return NextResponse.json([
        { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
        { id: 2, name: "1984", author: "George Orwell" },
        { id: 3, name: "Dracula", author: "Bram Stoker" },
      ])

    // we use array because data is more than 1

}


export const POST = () => {

    // database connection
    // insert data
  
    return NextResponse.json({ message: "Success" });

  };
  
