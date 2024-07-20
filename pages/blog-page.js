import Layout from "@/components/layout";
import Post from "@/components/post";
import { getAllPostsData } from "@/lib/posts";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div>Blog</div>
      <div>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();

  return { props: posts };
};
