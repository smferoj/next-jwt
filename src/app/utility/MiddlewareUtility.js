import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){
    try {
       let  token = req.cookie.get('token');
       let payload = await VerifyToken(token);
       const requestHeaders = new Headers(req.headers);
       requestHeaders.set('email', payload['email']);

        return NextResponse.next({
            request:{headers:requestHeaders}
        })
    } catch (err) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}