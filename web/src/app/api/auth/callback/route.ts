import { NextResponse } from "next/server";

export async function GET(request: NextResponse) {
   console.log('Hello world');
   const { searchParams} = new URL(request.url)
   const code = searchParams.get('code')
}
