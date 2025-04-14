import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const res = await fetch("https://simple-books-api.glitch.me/books");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
    }
};
