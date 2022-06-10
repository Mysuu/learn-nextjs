import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

export interface PostListPageProps {
  posts: any[];
}

//index routes
const PostListPage = ({ posts }: PostListPageProps) => {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  //hàm getStaticProps ở phía server-side
  //build lên production rồi chỉ chạy lúc build-time
  //lúc dev gửi request 1 lần luôn chạy hàm
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.map((data: any) => ({ id: data.id, title: data.title })),
    },
  };
};
