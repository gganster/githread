import React from 'react'
import { createPost } from '@/app/write/write-post.action';
import { getUser } from "@/src/feature/query/user.query";
import { WriteModal } from './WriteModal';

export default async function page() {
  const user = await getUser();

  return (
    <WriteModal user={user} path="write" createPost={async (v) => {
      "use server";
      return createPost(v);
    }} />
  )
}
