import Link from "next/link";
import React from "react";

const Post = (props) => {
  const { post } = props;
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <span>{post.id}</span>
        {" : "}
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
