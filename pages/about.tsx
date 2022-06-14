import Header from "@/components/common/header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MainLayOut } from "@/components/layout";

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });
//ssr: false k cho Header render ra bên phía sever, chỉ có ở client

const About = () => {
  const router = useRouter();
  const [postList, setPostList] = useState([]);
  const page = router.query?.page;
  // mới vào router.query là obj rỗng sẽ vào luôn hàm if
  // console.log("About query: ", router.query);

  useEffect(() => {
    if (!page) return; //return luôn k gọi api

    //check query available
    (async () => {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await res.json();
      setPostList(data.data);
    })();
  }, [page]); //mỗi lần page thay đổi fetch lại data

  const handleNextClick = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true } //k cho chạy laị hàm getStaticProps bên phía server nữa,
      // chỉ thay đổi routing bên client(gọi là shallow routing)
    );
  }; //mỗi lần router.push chạy sẽ gọi lại hàm getStaticProps bên phía server

  return (
    <div>
      {/* phần dữ liệu tĩnh bên phía server đc render sẵn*/}
      <h1>About Page</h1>
      <Header />
      {/* phía client mới fetch dữ liệu */}
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next page</button>
    </div>
  );
};

About.Layout = MainLayOut; //cái này giữ nguyên khi chuyển trang

export default About;

export async function getStaticProps() {
  console.log("get static props");

  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
