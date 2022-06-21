import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

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
