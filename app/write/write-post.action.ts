import { getUser } from "@/src/feature/query/user.query";
import { WritePostFormValues } from "./WritePostForm";
import { prisma } from "@/lib/prisma";

export const createPost : (values: WritePostFormValues) => Promise<string> = async (values: WritePostFormValues) => {
  const user = await getUser();

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id
    }
  });

  return post.id;
}

