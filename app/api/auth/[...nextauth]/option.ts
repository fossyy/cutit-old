import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
  ],
  callbacks: { 
    async redirect({ url, baseUrl }) { 
      return baseUrl 
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}