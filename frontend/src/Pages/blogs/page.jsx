import React from "react";
import Blogs from '../../components/Bogs/Bogs';
import BlogHeading from "../../components/Bogs/Heading";

function Page() {
  return (
    <div className="flex flex-col pt-32 gap-20 w-full px-3 sm:px-5 pb-20 bg-stone-100">
      <BlogHeading />
      <Blogs />
    </div>
  );
}

export default Page;
