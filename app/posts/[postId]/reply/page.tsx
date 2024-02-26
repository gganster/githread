import React from "react";
import { getUser } from "@/src/feature/query/user.query";
import { getPost } from "@/src/feature/query/post.query";
import { Post } from "@/src/feature/post/Post";
import { notFound } from "next/navigation";
import { WritePostForm } from "@/app/write/WritePostForm";
import { createPostReply } from "./write-reply.action";

export default async function Page({params} : {params: {postId: string}}) {
  const user = await getUser();
  const post = await getPost(params.postId, user.id);

  if (!post) return notFound();

  return (
    <div>
      <Post post={post} />
      <WritePostForm
        user={user}
        onSubmit={async (v) => {
          "use server";
          return createPostReply(post.id, v);
        }}
      />
    </div>
  )
}