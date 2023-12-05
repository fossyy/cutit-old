import axios, { AxiosResponse } from 'axios';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

interface Response extends AxiosResponse {
  data: {
    status: {
      Email: string;
      ApiKey: string;
      Apicall: number;
      Lastrequest: BigInt;
    };
  };
}

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
      return new Promise((resolve, reject) => {
        if (session) {
          axios.post(`${process.env.API_LINK}/api/user`, {
            email: token.email
          }).then((response) => {
            session.user.Apikey = response.data.status.Apikey;
            resolve(session);
          }).catch((error) => {
            console.error('Error fetching user data:', error);
            reject(error);
          });
        } else {
          resolve(session);
        }
      });
    },async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
}