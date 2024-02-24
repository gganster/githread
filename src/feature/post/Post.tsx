import React from "react";
import {PostHome} from "@/src/feature/query/post.query";
import { PostLayout } from '@/src/feature/post/PostLayout';
import Link from 'next/link';

type PostProps = {
  post: PostHome;
};

export const Post = ({post} : PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
    </PostLayout>
  );
};