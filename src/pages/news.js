import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { Heading1, HorizontalLine } from "../components/common";

const PostTitle = styled.h3``;

export default function News({ data }) {
  return (
    <Layout>
      <div>
        <Heading1
          styles={{
            display: "inline-block",
            borderBottom: "1px solid",
          }}
        >
          News
        </Heading1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <PostTitle>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </PostTitle>
              <p>{node.excerpt}</p>
            </Link>
            <HorizontalLine />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
