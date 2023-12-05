import axios from 'axios';
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
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        const userInitialisation: Response = await axios.post(`${process.env.API_LINK}/api/user`,{
          email: token.email
        })
      }
      return token
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
}