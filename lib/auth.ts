import GithubProvider from "next-auth/providers/github";
import {env} from "./env";
import { AuthOptions } from "next-auth";
import {prisma} from "./prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    })
  ]
};