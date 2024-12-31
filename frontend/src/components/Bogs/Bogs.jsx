import React from "react";
import { blogPosts } from "./blogs"; // Adjust the path as needed

function Blogs() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
      {blogPosts.map((item, index) => (
        <div
          id={item.slug}
          key={index}
          className="flex scroll-m-5 sm:scroll-m-20 bg-white flex-col gap-2 px-3 md:px-5 py-7 rounded-md shadow-md hover:shadow-2xl border-[1px] border-gray-300 relative transition-all duration-300"
        >
          <div className="w-full max-h-36 h-full rounded-md bg-gray-400 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-bold">{item.title.slice(0, 30)}...</p>
          <p className="text-sm text-gray-700">
            {item.description.slice(0, 100)}
          </p>
          <a
            href={`/blogs/${item.slug}#blog`}
            className="text-stone-600 justify-end text-sm cursor-pointer absolute right-3 bottom-3"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
