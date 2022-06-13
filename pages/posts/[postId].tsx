import { useRouter } from "next/router";
import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

export interface PostPageProps {
  post: any;
}

//dynamic routes(single, multiple parameter)
const PostDetailPageProps = ({ post }: PostPageProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!post) return null;
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
      <button>
        <Link href={"/posts"}>
          <a>Back to post</a>
        </Link>
      </button>
      {/* <p>Query: {JSON.stringify(router.query)}</p> */}
      {/* path parameter | route parameter */}
    </div>
  );
};

export default PostDetailPageProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    // fallback: false, //trả về not found
    // fallback: "blocking",//tạo ra 1 file json đường dẫn đc thêm vào,
    // phải chờ tgian hàm getStaticProps chạy
    fallback: true, //giống blocking nhưng thêm trạng thái chờ vào client
    //cho người dùng thấy
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId; //params có thể trả về  undefined nên để ?
  if (!postId) return { notFound: true };

  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
