import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";
import {cookies} from "next/headers"

export async function POST(req, res){
    
    const JSON = await  req.json();

    let email = JSON['email']; // if object comes from ousite it should write []
    let password = JSON['password'];

    // Data Base Checking....
    if(email === 'email@email.com' && password ==='123'){
    let Cookie =  await TokenCookie(email);
    return NextResponse.json(
        {status:true, message:"Login Success"}, {status:200, headers:Cookie}
    )
    }else{
        return NextResponse.json(
            {status:false, message:"Login failed"}
        )
    }
}

export async function GET(req, res){
   cookies().delete('token');
   return NextResponse.json(
    {status:true, messate:"logout succeussful"}
   )
}