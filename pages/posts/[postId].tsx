import { useRouter } from "next/router";
import React from "react";

//dynamic routes(single, multiple parameter)
const PostDetailPageProps = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      {/* path parameter | route parameter */}
    </div>
  );
};

export default PostDetailPageProps;
