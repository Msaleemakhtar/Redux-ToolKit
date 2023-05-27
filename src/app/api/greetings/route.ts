import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
 
    return  NextResponse.json({
       From: "saleem",
       message: "Hello pakistan",
       requestType: "Get"


    });
  }
 

  export async function POST (request: NextRequest) {
 const req = await request.json() 

 if(req.name){
 return  NextResponse.json({
      To: req.name,
       Message: "Hello pakistan",
       RequestType: "Post" 


    });
 } 
 
   
   else {
    return new NextResponse(" enter your data")
  }
  
}


export async function PUT (request: NextRequest) {
    const req = await request.json() 
   
    if(req.name){
    return  NextResponse.json({
         To: req.name,
          Message: "Hello pakistan",
          RequestType: "PUT" 
   
   
       });
    } 
     
      else {
       return new NextResponse(" enter your data")
     }  
   }


   export async function DELETE (request: NextRequest) {
   
   
   
    return  NextResponse.json({
         To: "saleem",
          Message: "Hello pakistan",
          RequestType: "Delete" 
   
   
       });
    } 
     
   