import { useRouter } from "next/router";
import React, { useEffect } from "react";

const About = () => {
  const router = useRouter();

  console.log("About query: ", router.query);

  useEffect(() => {
    //check query available
  });
  return <div>About</div>;
};

export default About;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
