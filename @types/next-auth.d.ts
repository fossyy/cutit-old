import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
      user: {
        Apikey: string;
      } & DefaultSession["user"]
    }
  }