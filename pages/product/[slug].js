import React from "react";
import Head from "next/head";
import HeroSection from "../../components/ProductPage/HeroSection";
import LinkTree from "../../components/ProductPage/LinkTree";
import RecommendedSection from "../../components/RecommendedSection";
import { products } from "../../productsAPI";
import {
  MdChevronLeft,
  MdChevronRight,
  MdInsertEmoticon,
} from "react-icons/md";

const Product = ({ projects }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="">
      <Head>
        <meta
          name="description"
          content="Check out all the projects I have done."
        />

        <meta property="og:title" content="Projects | Ifeanyi Umeh" />

        <meta
          property="og:description"
          content="Check out all the projects I have done."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://ifeanyiumeh.com/src/Profile_pix.png"
        />

        <meta property="og:url" content="https://ifeanyiumeh.com" />
        <title>Royal Electronics - Affordable luxury</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-sm.svg" />
        <link rel="apple-touch-icon" href="/favicon-md.svg" />
      </Head>

      <LinkTree product={projects.desc} cat={projects.cat} lref={projects.link1} />
      <HeroSection
        img={projects.img}
        img2={projects.img2}
        img3={projects.img3}
        img4={projects.img4}
        title={projects.title}
        desc={projects.desc}
        cat={projects.cat}
        feat1={projects.feat1}
        feat2={projects.feat2}
        feat3={projects.feat3}
        feat4={projects.feat4}
        feat5={projects.feat5}
        featdesc={projects.featdesc}
        lref={projects.link1}
      />
    </div>
  );
};

export default Product;

export const getStaticProps = async ({ params }) => {
  const data = products.filter((p) => p.slug === params.slug);

  return {
    props: {
      projects: data[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.map((projects) => ({
    params: { slug: projects.slug },
  }));
  return { paths, fallback: false };
};
