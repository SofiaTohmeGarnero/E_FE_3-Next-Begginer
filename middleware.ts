import { NextRequest, NextResponse } from "next/server";

export function middleware( req: NextRequest){
    const access = req.cookies.get("Access");
    const url = req.nextUrl.pathname;

    if(url.includes('home') || url.includes('faqs')){
        if(!access){
            return NextResponse.redirect("http://localhost:3000/login")
        }
    }
} 

/** matcher allows you to filter Middleware to run on specific paths */
export const config = {
    matcher: ['/home', '/faqs'],
}