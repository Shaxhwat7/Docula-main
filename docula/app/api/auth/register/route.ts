import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt"
import { hash } from "crypto";

const prisma = new PrismaClient()
export async function POST(req:Request) {
    const {email,name,password} = await req.json();

    const hashedpassword = await bcrypt.hash(password,10)

    const user = await prisma.user.create({
        data:{
            email,
            name,
            password: hashedpassword,
        },
    })

    return new Response(JSON.stringify(user),{status:200})
}   
