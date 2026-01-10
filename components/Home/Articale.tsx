"use client"
import React from 'react'
import { Calendar, User } from 'lucide-react'
import Image from 'next/image'

const Article = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why an LMS is Essential for Modern Education",
      category: "Lifestyle",
      date: "09 Aug 2025",
      author: "Shahzaib Ahmed",
      image: "/cg-2.avif",
      isLarge: true
    },
    {
      id: 2,
      title: "The Impact of LMS on Academic Journey Education",
      category: "Productivity",
      date: "09 Aug 2025",
      author: "Wusatullha",
      image: "/cg-1.webp"
    },
    {
      id: 3,
      title: "Maximizing Academic Success with the Right LMS",
      category: "Productivity",
      date: "09 Aug 2025",
      author: "Shoib",
      image: "/cg-6.avif"
    },
    {
      id: 4,
      title: "Promoting Health & Well being in Schools",
      category: "UI /UX",
      date: "09 Aug 2025",
      author: "Sahil",
      image: "/fs-4.avif"
    },
    {
      id: 5,
      title: "How to Build and Run a Pilot Mentoring Program",
      category: "Development",
      date: "09 Aug 2025",
      author: "Rafy",
      image: "/learning.avif"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#f6416c] font-semibold text-sm border-b-2 border-[#f6416c] inline-block pb-1 uppercase tracking-wider">
          Articles & Updates
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b1219] mt-4 mb-3">
          Our Recent Blog & Articles
        </h1>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Explore curated content to enlighten, entertain and engage global readers.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Large Featured Post (Left) */}
        <div className="lg:col-span-1">
          <ArticleCard post={blogPosts[0]} height="h-[600px]" />
        </div>

        {/* Small Posts Grid (Right) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <ArticleCard key={post.id} post={post} height="h-[288px]" />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-[#0b1219] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          View All Articles
        </button>
      </div>
    </section>
  )
}

// Reusable Card Component
const ArticleCard = ({ post, height }: { post: any, height: string }) => (
  <div className={`relative ${height} rounded-2xl overflow-hidden group cursor-pointer`}>
    {/* Background Image */}
    <Image 
      src={post.image} 
      alt={post.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    
    {/* Dark Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Author Badge */}
      <div className="flex items-center gap-2 bg-[#6342ff] text-white w-fit px-3 py-1.5 rounded-full text-xs font-medium">
        <div className="w-5 h-5 bg-gray-300 rounded-full overflow-hidden relative">
           <User size={12} className="absolute inset-0 m-auto text-gray-600" />
        </div>
        {post.author}
      </div>

      {/* Post Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-white/80 text-xs">
          <span className="border border-white/30 px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-white/60" />
            {post.date}
          </div>
        </div>
        <h3 className={`text-white font-bold leading-tight ${post.isLarge ? 'text-2xl' : 'text-lg'}`}>
          {post.title}
        </h3>
      </div>
    </div>
  </div>
)

export default Article