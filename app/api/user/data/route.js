
import connectDB from "@/config/db";
import { getAuth} from "@clerk/nextjs/server";
import User  from "@/models/User";
import { NextResponse } from "next/server";
export async function GET(request){
try {
    const { userId}=getAuth(request) 
    
    await connectDB()
    const user =await User.findIdBy(userId)
    if(!user){
        return NextResponse.json({sucess: false, message:"User Not Found"})
}
return NextResponse.json({ sucess:true, user})
} catch (error) {
    
    return NextResponse.json({sucess: false, message:error.message})
}
}