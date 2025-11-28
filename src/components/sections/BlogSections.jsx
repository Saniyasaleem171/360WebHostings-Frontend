// src/components/sections/BlogSections.jsx

import React, { useState } from 'react';
import { ShareIcon, ClockIcon, PencilSquareIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Using outline icons
import { MagnifyingGlassIcon as MagnifyingGlassSolidIcon } from '@heroicons/react/24/solid'; // Using solid for search widget
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

// --- 1. Article Data (Updated with 'tag' for filtering) ---
const allArticles = [
  {
    tag: 'Hosting Tips',
    type: 'FEATURED',
    category: 'HOSTING TIPS',
    title: 'Why NVMe SSD Hosting is a Game Changer for Your Website Speed',
    excerpt: 'Discover how Non-Volatile Memory Express (NVMe) technology can boost your website speed and performance to unprecedented levels.',
    author: 'Muhammad Anas',
    date: 'Feb 28, 2025',
    readTime: '4 min read',
    image: '/images/article1.jpg',
    isLarge: true,
  },
  {
    tag: 'Security',
    category: 'SECURITY',
    title: '10 Essential Security Tips to Protect Your WordPress Site',
    excerpt: 'WordPress is popular, but that makes it a target. Learn the top 10 security practices to keep your site safe from hackers and malware.',
    author: 'Ayan Ali',
    date: 'Feb 25, 2025',
    readTime: '8 min read',
    image: '/images/article2.png',
  },
  {
    tag: 'Tutorials',
    category: 'TUTORIALS',
    title: 'How to Choose the Right Domain Name for Your Brand',
    excerpt: 'Your domain name is your identity on the web. Here is a complete guide on choosing a memorable and SEO-friendly domain.',
    author: 'Sarah Khan',
    date: 'Feb 20, 2025',
    readTime: '6 min read',
    image: '/images/article3.jfif',
  },
  {
    tag: 'Company News',
    category: 'COMPANY NEWS',
    title: '360 Web Hostings Launches New Cloud VPS Plans',
    excerpt: 'We are excited to announce our new high-performance Cloud VPS plans featuring dedicated resources and fast SSDs.',
    author: 'Admin Team',
    date: 'Feb 15, 2025',
    readTime: '3 min read',
    image: '/images/article6.webp',
  },
  {
    tag: 'Tutorials',
    category: 'TUTORIALS',
    title: 'The Ultimate Guide to cPanel for Beginners',
    excerpt: 'Navigating cPanel can be daunting. This step-by-step guide walks you through the most important features you need to know.',
    author: 'Tech Support',
    date: 'Feb 10, 2025',
    readTime: '12 min read',
    image: '/images/article4.jfif',
  },
  {
    tag: 'Hosting Tips',
    category: 'HOSTING TIPS',
    title: 'Why Uptime Matters: The Cost of Downtime',
    excerpt: 'Every second your site is down, you lose potential customers. Learn why our 99.9% uptime guarantee is crucial for your business.',
    author: 'Muhammad Anas',
    date: 'Feb 05, 2025',
    readTime: '4 min read',
    image: '/images/article5.jfif',
  },
];

// Define categories for the filter buttons
const categories = [
  'All', 
  'Hosting Tips', 
  'Security', 
  'Tutorials', 
  'Company News', 
  'WordPress' // Note: 'WordPress' tag has no matching articles in dummy data but is included for layout
];

// --- 2. Article Card Component (Reused) ---
const ArticleCard = ({ article }) => {
  const isLarge = article.isLarge;

  // Function to determine the icon based on category, matching the metadata in the images
  const getIcon = (category) => {
    switch (category) {
      case 'SECURITY':
      case 'HOSTING TIPS':
        return <ClockIcon className="h-4 w-4 mr-1" />; // Using clock for date/time
      case 'TUTORIALS':
      case 'COMPANY NEWS':
        return <ClockIcon className="h-4 w-4 mr-1" />; 
      default:
        return <ClockIcon className="h-4 w-4 mr-1" />; 
    }
  };

  return (
    <div className={`
      bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 
      ${isLarge ? 'col-span-12' : 'col-span-12 md:col-span-6'}
    `}>
      <div className={`${isLarge ? 'flex max-lg:flex-col' : 'block'} h-full`}>
        {/* Image */}
        <div className={`relative ${isLarge ? 'w-2/5 max-lg:w-full max-lg:h-80 h-auto' : 'h-52 w-full'}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
          {article.type && (
            <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
              {article.type}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${isLarge ? 'w-3/5 max-lg:w-full' : 'w-full'}`}>
          {/* Category Tag */}
          <span className="text-xs font-semibold text-[#F8C51E] uppercase tracking-widest">{article.category}</span>
          
          <h3 className={`font-bold text-[#2b1c19] mt-2 mb-3 ${isLarge ? 'text-3xl' : 'text-xl hover:text-[#F8C51E] transition-colors'}`}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
          
          {/* Footer Meta */}
          <div className="flex items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
            
            {/* Date */}
            {getIcon(article.category)}
            <span className="mr-4">{article.date}</span>
            
            {/* Read Time */}
            <ClockIcon className="h-4 w-4 mr-1" />
            <span className="mr-4">{article.readTime}</span>

            {/* Author */}
            <UserIcon className="h-4 w-4 mr-1" />
            <span className="font-medium">{article.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. Sidebar Component (Reused) ---
const Sidebar = () => (
    <aside className="w-full lg:w-80 space-y-8 sticky top-8">
      
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-[#2b1c19] text-lg mb-4">Search</h4>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Type keyword..." 
            className="w-full py-3 pl-4 pr-10 border border-gray-300 rounded-full focus:ring-[#F8C51E] focus:border-[#F8C51E] text-sm" 
          />
          <MagnifyingGlassSolidIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
  
      {/* Subscribe Widget (Dark Box) */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h4 className="font-bold text-white text-xl mb-3">Subscribe Now</h4>
        <p className="text-gray-400 text-sm mb-4">
          Get the latest updates and exclusive offers delivered right to your inbox.
        </p>
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full py-3 px-4 border-none rounded-lg text-sm mb-3" 
        />
        <button className="w-full py-3 px-4 bg-[#F8C51E] text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
          Subscribe
        </button>
      </div>
  
      {/* Trending Now Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-[#2b1c19] text-lg mb-4 border-b pb-2">Trending Now</h4>
        <div className="space-y-4">
          {[
            { title: 'Why NVMe SSD Hosting is a Game Changer for Your Website Speed', category: 'HOSTING TIPS', date: 'Feb 28, 2025', image: '/images/article1.jpg' },
            { title: 'How to Choose the Right Domain Name for Your Brand', category: 'TUTORIALS', date: 'Feb 20, 2025', image: '/images/article3.jfif' },
            { title: 'The Ultimate Guide to cPanel for Beginners', category: 'TUTORIALS', date: 'Feb 10, 2025', image: '/images/article4.jfif' },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors cursor-pointer">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase">{item.category}</span>
                <p className="text-sm font-medium text-[#2b1c19] mt-1 leading-tight">{item.title}</p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                    <ClockIcon className="h-3 w-3 mr-1" /> {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Tags Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-[#2b1c19] text-lg mb-4 border-b pb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {['#hosting', '#vps', '#Domains', '#SSL', '#cPanel', '#WordPress', '#SEO', '#Security', '#Speed', '#Business'].map(tag => (
            <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-[#F8C51E] hover:text-gray-900 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Social Media Widget */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-[#2b1c19] text-lg mb-4 border-b pb-2">Follow Us</h4>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              <FaFacebookF className="text-xl text-white" /> Facebook
          </button>
          <button className="flex items-center px-4 py-2 bg-sky-400 text-white rounded-lg text-sm font-semibold hover:bg-sky-500 transition-colors">
              <FaXTwitter className="text-xl text-white" /> Twitter
          </button>
          <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors">
              <FaInstagram className="text-xl text-white" /> Instagram
          </button>
        </div>
      </div>
  
    </aside>
  );

// --- 4. Main Component combining Hero and Content ---
const BlogSections = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtering logic identical to your FAQList component
  const filteredArticles = 
    selectedCategory === 'All'
      ? allArticles
      : allArticles.filter(article => article.tag === selectedCategory);
  
  // Separate featured article (if present and passes filter)
  const featuredArticle = filteredArticles.find(a => a.isLarge) || filteredArticles[0];
  const restOfArticles = filteredArticles.filter(a => a !== featuredArticle);
  
  // If the featured article is not found in the filtered list (e.g., if filtering by a category the featured article doesn't have)
  const displayedArticles = featuredArticle && filteredArticles.includes(featuredArticle) ? [featuredArticle, ...restOfArticles] : filteredArticles;

  return (
    <div className="w-full">
      
      {/* BLOG HERO SECTION (Image 1.jpg) */}
      <div 
        className="relative w-full text-center py-20 md:pb-3 overflow-hidden" 
        style={{ 
          backgroundColor: '#2b1c19',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/blog-hero.jfif')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          
          <span className="inline-block bg-[#F8C51E] text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Knowledge Hub
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Insights, Updates & <br className="hidden sm:inline" />
            <span className="text-gray-400">Expert Advice</span>
          </h1>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Stay ahead of the curve with the latest web hosting trends, security best practices, and exclusive company announcements.<br/><br/>
          </p>

          {/* Category Filter Buttons (from Blog Hero and matching FAQ filter logic) */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)} // Update state on click
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                  ${cat === selectedCategory // Check current state for active class
                    ? 'bg-[#F8C51E] text-gray-900 shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* BLOG CONTENT SECTION (Images 2.jpg, 3.jpg, 4.jpg, 5.jpg) */}
      <div className="w-full bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN: Articles List */}
          <div className="w-full lg:flex-1 space-y-8">
            
            {/* Articles Grid */}
            <div className="grid grid-cols-12 gap-6">
              {displayedArticles.length > 0 ? (
                displayedArticles.map((article, index) => (
                  <ArticleCard 
                    key={index} 
                    article={article} 
                  />
                ))
              ) : (
                <div className="col-span-12 text-center py-10 bg-white rounded-xl">
                  <p className="text-lg text-gray-600">No articles found for the selected category.</p>
                </div>
              )}
            </div>
            
            {/* Pagination (only show if there are articles)
            {displayedArticles.length > 0 && (
              <div className="flex justify-center items-center pt-8">
                <div className="flex gap-2 items-center text-sm font-medium">
                  <button className="w-10 h-10 bg-gray-900 text-white rounded-lg">1</button>
                  <button className="w-10 h-10 text-gray-600 hover:bg-gray-100 rounded-lg">2</button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Next</button>
                </div>
              </div>
            )} */}
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <Sidebar />
        </div>
      </div>

    </div>
  );
};

export default BlogSections;