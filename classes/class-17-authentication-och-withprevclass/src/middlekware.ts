import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware=async (request:NextRequest)=>{
    const cookiesStore= await cookies() //client comp may ye nhi chalti
    const isLoggedIn=cookiesStore.get("isLoggedIn")
    // console.log(isLoggedIn?.value)
    if (isLoggedIn?.value==='0') {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else if (isLoggedIn?.value==='1'&&
        request.nextUrl.pathname==="/login"
        // we write this too many times in middleware 
        // request.nextUrl.pathname checks users current page
    ) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    // else if (isLoggedIn?.value==='1') {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    // }

    console.log("middleware")
    return NextResponse.next()
}
export const config = {
    matcher: ['/','/login']  // we use array if multiple paths   // if homepage so there could be too many redirects error (loop)
  }
