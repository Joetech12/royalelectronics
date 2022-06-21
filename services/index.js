import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// Blogs API

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogsConnection {
        edges {
          node {
            image {
              size
              width
              url
            }
            slug
            title
            id
            content {
              html
            }
            date
            excerpt
            
          }
          cursor
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.blogsConnection.edges;
};

export const getBlogDetails = async (slug) => {
  const query = gql`
    query GetBlogDetails($slug: String!) {
      blog(where: { slug: $slug }) {
        image {
          size
          width
          url
        }
        slug
        title
        id
        content {
          raw
        }
        date
        excerpt

      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.blog;
};

// Products API

export const getProducts = async () => {
  const query = gql`
  query MyQuery {
    productsConnection {
      edges {
        node {
          category
          feature1
          feature2
          feature3
          feature4
          feature5
          featureMain
          id
          image1 {
            url
          }
          image2 {
            url
          }
          image3 {
            url
          }
          image4 {
            url
          }
          link1
          model
          slug
          title
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.productsConnection.edges;
};
