import React from 'react'
import Blog from './Blog'

const RecentBlog = ({ blogs }) => {
  return (
    <div className="flex xs:flex-col xs:items-center md:flex-row pt-[50px] ">
    {blogs.slice(0, 3).map((blog, index) => (
      <Blog
        key={blog.node.id}
        img={blog.node.image.url}
        title={blog.node.title}
        date={blog.node.date}
        text={blog.node.excerpt}
        slug={blog.node.slug}
      />
    ))}
  </div>
  )
}

export default RecentBlog