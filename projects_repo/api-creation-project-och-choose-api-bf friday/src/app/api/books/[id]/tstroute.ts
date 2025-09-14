import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  return NextResponse.json({ id: data.id })
}



// sir books ka array variable data phir .find abhi kay liye wrna asal may to data base sy data fetch

// https://youtu.be/jXND9Cc4Ico?si=gCL8MA3RsQW6NsyT&t=7250 yaha sy cdn ki baat ho rhi hai