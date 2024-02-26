import {prisma} from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const postSelectQuery = (userId?: string) => ({
  id: true,
  content: true,
  createdAt: true,
  user: {
    select: {
      image: true,
      username: true,
      id: true,
      name: true
    }
  },
  likes: {
    select: {
      userId: true
    },
    where: {
      userId: userId ?? "error"
    }
  },
  _count: {
    select: {
      likes: true,
      replies: true
    }
  }
} satisfies Prisma.PostSelect);

export const getLatestsPosts = (userId?: string) => {
  return prisma.post.findMany({
    where: {
      parentId: null,
    },
    take: 20,
    orderBy: {
      createdAt: "desc"
    },
    select: postSelectQuery(userId)
  });
}
export type PostHome = Prisma.PromiseReturnType<typeof getLatestsPosts>[number];

export const getPostView = async (id: string, userId?: string) => {
  return prisma.post.findUnique({
    where: {
      id
    },
    select: {
      ...postSelectQuery(userId),
      replies: {
        select: postSelectQuery(userId),
      },
      parent: {
        select: postSelectQuery(userId),
      }
    }
  });
}
export type PostView = Prisma.PromiseReturnType<typeof getPostView>;

export const getPost = async (id: string, userId?: string) => {
  return prisma.post.findUnique({
    where: {id},
    select: {
      ...postSelectQuery(userId),
    }
  })
}
export type Post = Prisma.PromiseReturnType<typeof getPost>;