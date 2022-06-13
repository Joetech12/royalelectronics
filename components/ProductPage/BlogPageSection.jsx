import React from 'react'
import { blogs } from '../../blogsAPI'
import Blog from '../Blog'

const BlogPageSection = () => {
  return (
    <div>
        <div className="w-full">
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1240px] mx-auto px-[0px] xs:py-[0px] md:py-[100px]">
        <div className="flex xs:flex-col flex-wrap xs:items-center md:flex-row pt-[50px] ">
            {blogs.slice(0, 12).map((bg) => (
              <Blog key={bg.id} img={bg.img} title={bg.title} date={bg.date} text={bg.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogPageSection