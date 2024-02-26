import { getAuthSession } from "@/lib/auth";
import React from "react";
import {getPostView} from "@/src/feature/query/post.query";
import { notFound } from "next/navigation";
import { Post } from "@/src/feature/post/Post";
import clsx from "clsx";

type PostSingleProps = {
  params: {
    postId: string
  }
};

export default async function PostSingle({params} : PostSingleProps) {
  const {postId} = params;
  const session = await getAuthSession();
  const post = await getPostView(postId, session?.user.id);

  if (!post) return notFound();

  return (
    <div className="divide-y divide-accent">
      {post.parent && <Post post={post.parent} key={post.parent.id} />}
      <div className={clsx({
        "ml-10": post.parent
      })}>
        <Post post={post} key={post.id} />
        <div className="ml-10 divide-y divide-accent">
          {post.replies.map((reply) => (
            <Post post={reply} key={reply.id} />
          ))}
        </div>
      </div>
    </div>
  )
}