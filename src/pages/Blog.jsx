// src/pages/Blog.jsx

import React from 'react';
import BlogSections from '../components/sections/BlogSections'; // Combined component

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      
      <main>
        {/* Use the combined section component */}
        <BlogSections />
      </main>
      
    </div>
  );
};

export default BlogPage;