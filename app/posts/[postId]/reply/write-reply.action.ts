import { getUser } from "@/src/feature/query/user.query";
import { WritePostFormValues } from "@/app/write/WritePostForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPostReply = async (postId: string, values: WritePostFormValues) => {
  const user = await getUser();

   await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
      parentId: postId
    }
  });

  revalidatePath(`/posts/${postId}`);

  return postId;//override to parent
}

