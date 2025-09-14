import { NextRequest, NextResponse } from "next/server";

// Fetch data from `/api/books`
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  // Fetch all books from the static API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/books`);
  const books = await res.json();

  // Find the book by ID
  const bookId = parseInt(params.id, 10);
  const book = books.find((b: { id: number }) => b.id === bookId);

  // Check if the book exists
  if (!book) {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }

  // Return the book details
  return NextResponse.json(book);
};
