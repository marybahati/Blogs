import React from "react";
import Link from "next/link";
import { BlogPost } from "../data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="border border-gray-300 mb-4">
      <Link href={`/posts/${post.slug}`}>
        <img
          src={`${post.image}`}
          width={500}
          height={500}
          alt="Blog post IMage"
        />
        <div className="p-4">
          <p className="text-gray-500">{post.date} - 5 min read</p>
          <h2 className="text-xl font-semibold mb-3 mt-3">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
