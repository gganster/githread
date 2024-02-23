import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
import React from 'react'

export default async function Home() {
  const session = await getAuthSession();

  const posts = await prisma.post.findMany({
    where: {
      parentId: null,
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
      user: {
        select: {
          image: true,
          username: true,
          id: true
        }
      },
      likes: {
        select: {
          userId: true
        },
        where: {
          userId: session?.user?.id ?? "error"
        }
      },
      _count: {
        select: {
          likes: true,
          replies: true
        }
      }
    },
  });

  return (
    <div>
      {posts.map((post) => (
        <div>
          <div>
            <img src={post.user.image} alt="user image" />
            <span>{post.user.username}</span>
          </div>
          <p>{post.content}</p>
          <div>
            <span>{post._count.likes} likes</span>
            <span>{post._count.replies} replies</span>
          </div>
          <div>
            {post.likes.length > 0 ? "liked" : "not liked"}
          </div>
        </div>
      ))}
    </div>
  )
}