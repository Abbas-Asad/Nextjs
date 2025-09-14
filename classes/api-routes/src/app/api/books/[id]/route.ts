import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {

  const data = await params;
  return NextResponse.json({ id: data.id })

  // If we want data of books here so first we use array of objects here then apply .find method and we can also print an error message if id doesn't exist. 

}
