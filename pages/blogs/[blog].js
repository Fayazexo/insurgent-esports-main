import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  const router = useRouter();
  const uri = router.query;
  console.log(uri);
  return <div>Hello</div>;
};

export default Blog;
