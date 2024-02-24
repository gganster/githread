import React from "react";
import {WritePostForm} from "./WritePostForm";
import { getUser } from "@/src/feature/query/user.query";
import { createPost } from "./write-post.action";

export default async function WritePage() {
  const user = await getUser();

  return (
    <div>
      <WritePostForm user={user} onSubmit={async (v) => {
         "use server";
         return createPost(v);
      }} />
    </div>
  );
}