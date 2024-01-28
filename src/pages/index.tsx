import React, { useState } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogData";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  slug: number;
  content: string;
  image: string;
}

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (indexOfLastPost < blogPosts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = () => {
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Layout>
        <div className="grid grid-cols-1 mt-5 mb-8">
          <h1 className="text-4xl">The Accessibility Blog</h1>
          <h6>The voice of the excluded</h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {filteredPosts.length > 0
            ? filteredPosts.map((post) => (
              <div key={post.slug} className="border mb-4">
                <Link href={`/posts/${post.slug}`}>
                  <img
                    src={`${post.image}`}
                    width={500}
                    height={500}
                    alt="Blog post IMage"
                  />
                  <div className="p-4">
                    <p className="text-gray-600">{post.date} - 5 min read</p>
                    <h2 className="text-xl font-bold mb-3 mt-3">
                      {post.title}
                    </h2>
                    <p>{post.content}</p>
                  </div>
                  </Link>
                </div>
              ))
            : currentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="pt-2">
            Page {currentPage} of {totalPages}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 ml-4 rounded"
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
