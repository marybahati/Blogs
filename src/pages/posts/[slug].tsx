import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { blogPosts } from "../../data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";

interface BlogPost {
  title: string;
  date: string;
  slug: number;
  content: string;
  image: string;
}

const Post: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const { slug } = router.query;

  if (!slug) return null;

  const post = blogPosts.find((p) => p.slug === Number(slug));

  if (!post) return <div>Post not found</div>;

  const handleSearch = () => {
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Layout>
        <div className="w-full sm:w-3/4 mx-auto">
          <a
            href="#"
            onClick={goBack}
            className="flex items-center text-black hover:text-gray-600 focus:outline-none"
          >
            <FaArrowLeft className="mr-2" />
            Back to blog posts
          </a>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-xl font-semibold mb-3 mt-3 text-center">
              {post.title}
            </h2>
            <p className="text-gray-500 text-center">
              {post.date} - 5 min read
            </p>
          </div>
          <div className="relative">
            <img
              src={`${post.image}`}
              className="w-full h-auto max-h-100"
              alt="Blog post IMage"
            />
            <p className="pt-8 pb-12">{post.content.repeat(30)}</p>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Post;
