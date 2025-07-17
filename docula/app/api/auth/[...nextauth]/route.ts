import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { User } from "lucide-react";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import bcrypt from "bcrypt"
const prisma = new PrismaClient();
const handler = NextAuth({
    adapter:PrismaAdapter(prisma),
    session:{
        strategy:"jwt",
    },
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                Email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"},
            },
            async authorize(credentials){
                const user = await prisma.user.findUnique({
                    where:{Email:credentials?.Email},
                });
                if(!user || !user.password || !credentials?.password) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if(!isValid) return null

                return user;
            }
        })
    ],
    pages:{
        signIn:"/login",
    }
})

export {handler as GET, handler as POST}