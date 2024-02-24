import React from "react";
import {PostHome} from "@/src/feature/query/post.query";
import { PostLayout } from '@/src/feature/post/PostLayout';
import Link from 'next/link';
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type PostProps = {
  post: PostHome;
};

export const Post = ({post} : PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex items-center">
        <Button size="icon" variant="ghost">
          <Heart size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <MessageCircle size={20} />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`} className="text-sm text-muted-foreground">
          {post._count.likes} likes
        </Link>
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`} className="text-sm text-muted-foreground">
          {post._count.replies} replies
        </Link>
      </div>
    </PostLayout>
  );
};