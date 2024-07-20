import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers";

import bcrypt from "bcryptjs";
import { ConnectDb } from "@/config/db";

import { NextResponse, NextRequest } from "next/server";
import Credentials from "next-auth/providers/credentials";
import User from "@/config/models/UserModel";

const dbConnection = async () => {
  await ConnectDb();
};
dbConnection();

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credential",
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: { label: "userName", type: "text" },
      },

      async authorize(credentials, req) {
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.email },
              { username: credentials.username },
            ],
          });

          if(!user){
            throw new Error("User not found with This Email");
          }

          if(!user.isVerfied){
            throw new Error("User is not verified");



          }

        const isCorrectPassword=  await bcrypt.compare(credentials.password,user.password)
        if(!isCorrectPassword){
          throw new Error("Incorrect Password");
        }
          return user;
        } catch (error) {
          throw new Error(error);
        }
        //
      },
    }),
  ],pages:{
    signIn:"/signup",

  },session:{
    strategy:"jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
};
