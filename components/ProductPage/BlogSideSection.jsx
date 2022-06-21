import React from 'react'
import Blog from '../Blog'
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import { graphCMSImageLoader } from "../../util";
import { useRouter } from "next/router";







const BlogSideSection = ({ blogs }) => {


  return (
    <div>
           {blogs?.slice(0, 3).map((blog, index) => (
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

export default BlogSideSection




export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];
  return {
    props: { blogs },
  };
}
