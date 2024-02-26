import React from 'react'
import { WriteModal } from '../../../(.)write/WriteModal';
import { getUser } from '@/src/feature/query/user.query';
import { createPostReply } from '@/app/posts/[postId]/reply/write-reply.action';

export default async function reply({params} : {params: {postId: string}}) {
  const user = await getUser();

  return (
    <WriteModal 
      path="reply"
      user={user} 
      createPost={async (v) => {
        "use server";

        const reply = createPostReply(params.postId, v);
        return reply;
      }}
    />
  );
}
