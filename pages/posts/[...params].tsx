import { useRouter } from "next/router";
import React from "react";

//dynamic routes(cacth all routes, optional cacth all routes)
const ParamsPageProps = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      {/* path parameter | route parameter */}
    </div>
  );
};

export default ParamsPageProps;
