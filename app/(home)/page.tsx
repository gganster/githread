import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
import React from 'react'
import { getLatestsPosts } from '@/src/feature/query/post.query';
import { Post } from '@/src/feature/post/Post';

export default async function Home() {
  const session = await getAuthSession();
  const posts = await getLatestsPosts();

  return (
    <div className="divide-y divide-muted">
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  )
}