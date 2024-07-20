import React from "react";

import { getAllPostsIds, getPostData } from "@/lib/posts";
import Layout from "@/components/layout";
import Link from "next/link";

const Post = (props) => {
  const { post } = props;
  if (!post) {
    return <div>...Loading</div>;
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID: "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="mt-12 flex cursor-pointer">
          <svg
            className="mr-3"
            dataSlot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ariaHidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            ></path>
          </svg>
          <span>back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return { paths, fallback: false };
};

export const getStaticProps = async (props) => {
  const { params } = props;
  const post = await getPostData(params.id);
  return { props: post };
};
