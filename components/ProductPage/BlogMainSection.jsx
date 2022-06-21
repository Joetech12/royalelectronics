import React from "react";
import { blogs } from "../../blogsAPI";
import Blog from "../Blog";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import { graphCMSImageLoader } from "../../util";
import { useRouter } from "next/router";
import Loader from "../Loader";

const BlogMainSection = ({ title, date, image, content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white py-[50px] px-[20px]">
      {/* Blog heading */}
      <div className="flex flex-col items-center justify-center mb-[30px]">
        <h1 className="font-bold xs:text-[30px] md:text-[40px] xs:text-center leading-[40px] xs:mb-[10px] px-[20px]">
          {title}
        </h1>
        <div className="flex items-center group mb-[20px]">
          <div className="text-[26px] text-royal text-black/50">
            <MdDateRange />
          </div>
          <p className="ml-[10px] text-black/50 xs:text-[18px] md:text-[20px]">
            {date}
          </p>
        </div>
      </div>

      {/* Blog Image */}
      <div className="mb-[50px]">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          src={image}
          alt={title}
          objectfit="cover"
          width="1902"
          height="1100"
        />
      </div>

      {/* Blog textbody */}
      <div className="px-[20px]">
        {content.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default BlogMainSection;
