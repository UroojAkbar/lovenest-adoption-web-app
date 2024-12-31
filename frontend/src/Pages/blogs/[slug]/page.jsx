import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../../components/Bogs/blogs"; 

function Blog() {
  const { slug } = useParams();

  const blogPost = blogPosts.find((item) => item.slug === slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="flex flex-col w-full pt-24 gap-6 px-3 sm:px-5 pb-20">
      <Link
        id="blog"
        to="/blog"
        className="w-fit scroll-m-5 rounded-xl cursor-pointer bg-stone-700 text-white font-bold text-sm px-4 py-2"
      >
        Back
      </Link>
      <div className="w-full flex flex-col gap-6">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full border-[1px] border-gray-300 shadow-2xl max-h-96 object-contain rounded-md"
        />

        <div className="text-2xl font-bold md:text-4xl">{blogPost.title}</div>
        <div className="text-xl md:text-3xl font-semibold">
          {blogPost.shortDescription}
        </div>
        <div className="md:text-xl">{blogPost.description}</div>

        {/* Add a link to the related website */}
        {blogPost.link && (
          <a
            href={blogPost.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-4"
          >
            Visit {blogPost.title}
          </a>
        )}
      </div>
    </div>
  );
}

export default Blog;

