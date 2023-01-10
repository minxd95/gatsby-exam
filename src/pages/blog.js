import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
