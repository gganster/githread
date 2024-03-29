import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { postSelectQuery } from "./post.query";

const userQuery = {
  id: true,
  name: true,
  username: true,
  image: true,
  bio: true,
  createdAt: true,
} satisfies Prisma.UserSelect;

export const getUser = async () => {
  const session = await getAuthSession();

  if (!session?.user.id)
    throw new Error("User not found");

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: session.user.id
    }
  });

  return user;
}

export const getUserProfile = async (userId : string) => {
  return prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      ...userQuery,
      _count: {
        select: {
          followeds: true,
          likes: true
        }
      },
      posts: {
        select: postSelectQuery(userId),
        take: 10,
        orderBy: {
          createdAt: "desc"
        }
      },
      followeds: {
        select: {
          id: true,
          follower: true
        },
        take: 3,
        orderBy: {
          createdAt: "desc"
        }
      },
    }
  })
}
export type UserProfile = NonNullable<Prisma.PromiseReturnType<typeof getUserProfile>>;