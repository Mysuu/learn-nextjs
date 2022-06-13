import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
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
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
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
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();

  return {
    props: {
      posts: data.data.map((data: any) => ({ id: data.id, title: data.title })),
    },
  };
};
