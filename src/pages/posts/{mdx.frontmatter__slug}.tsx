import * as React from "react";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import Toc from "../../components/Toc";
import Comments from "../../components/Comments";
import { SEO } from "../../components/Seo";

interface toc {
  title: string;
  url: string;
  items?: toc[];
}

type DataProps = {
  mdx: {
    frontmatter: {
      thumbnail_image: { publicURL: string & IGatsbyImageData };
      tags: string[];
      title: string;
      subtitle: string;
      date: string;
      thumbnail_image_alt: string;
      thumbnail_image_credit_link: string;
      thumbnail_image_credit_text: string;
    };
    tableOfContents: {
      items: toc[];
    };
  };
};

const BlogPost = ({ data, children }: PageProps<DataProps>) => {
  const image = getImage(data.mdx.frontmatter.thumbnail_image);

  return (
    <Layout>
      <div
        css={css`
          display: flex;
          gap: 10rem;
        `}
      >
        <div
          css={css`
            width: 70%;
            /* From https://css.glass */
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 2rem;
            @media (max-width: 768px) {
              flex: 1;
            }
          `}
        >
          <h1
            css={css`
              font-weight: 600;
              font-size: 2.8rem;
            `}
          >
            {data.mdx.frontmatter.title}
          </h1>
          <p
            css={css`
              color: gray;
              font-size: 1.4rem;
            `}
          >
            {data.mdx.frontmatter.date}
          </p>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              margin-top: 1rem;
            `}
          >
            {data.mdx.frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                css={css`
                  font-size: 1.4rem;
                  color: #7c93c3;
                  background-color: #eef5ff;
                  padding: 0.4rem;
                  border-radius: 10px;
                `}
              >
                {`#${tag}`}
              </span>
            ))}
          </div>

          {image && (
            <GatsbyImage
              css={css`
                border-radius: 10px;
                margin: 2rem auto 0;
                width: 80%;
                display: block;
              `}
              image={image}
              alt={data.mdx.frontmatter.thumbnail_image_alt}
            />
          )}
          {data.mdx.frontmatter.thumbnail_image_credit_text && (
            <p
              css={css`
                text-align: center;
                margin-top: 1rem;
                margin-bottom: 2rem;
                font-size: 1.4rem;
                color: #7f8487;
                font-style: oblique;
              `}
            >
              이미지 출처 :{" "}
              <a href={data.mdx.frontmatter.thumbnail_image_credit_link}>
                {data.mdx.frontmatter.thumbnail_image_credit_text}
              </a>
            </p>
          )}
          <main
            css={css`
              margin: 6rem 0;
              & img,
              .gatsby-resp-image-wrapper {
                width: 70%;
                display: block;
                border-radius: 10px;
                margin: 2rem auto;
                box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
                @media (max-width: 768px) {
                  width: 100%;
                }
              }
              & p {
                font-size: 1.6rem;
                line-height: 3rem;
                color: #181818;
                line-spacing: 0.4px;
              }
              & strong {
                font-weight: 600;
                letter-spacing: 0.8px;
              }

              & h1 {
                font-weight: 600;
                font-size: 2.8rem;
                margin: 3rem 0;
              }

              & h2 {
                font-weight: 600;
                font-size: 2.4rem;
                margin: 3rem 0;
              }
              & h3 {
                font-weight: 600;
                font-size: 2rem;
                margin: 3rem 0;
              }
              & h4 {
                font-weight: 600;
                font-size: 1.8rem;
                margin: 3rem 0;
              }
              & h5 {
              }
              & h6 {
              }
              & blockquote {
                border-radius: 10px;
                background-color: #f2f2f2;
                padding: 0.4rem 2rem;
                @media (max-width: 768px) {
                  margin: 0;
                }
              }
              & hr {
                background-color: #e3e3e3;
                height: 1.8px;
                margin: 4rem 0;
                width: 100%;
                border: 0;
              }
              & ol {
                background-color: #eef2f5;
                border-radius: 10px;
                padding: 2rem 4rem;
              }
              & ul {
                background-color: #eef2f5;
                border-radius: 10px;
                padding: 2rem 4rem;
              }
              & li {
                font-size: 1.6rem;
                line-height: 3rem;
                color: #181818;
                line-spacing: 0.4px;
              }
              & code {
                background-color: #eef2f5;
                border-radius: 10px;
                padding: 0.4rem 1rem;
              }
              & img + em,
              figcaption,
              figcaption p {
                text-align: center;
                display: block;
                margin-top: 1rem;
                margin-bottom: 4rem;
                font-size: 1.4rem;
                color: #7f8487;
                font-style: oblique;
              }
              & details summary {
                font-size: 1.4rem;
                font-weight: 600;
                color: gray;
                font-style: oblique;
              }
              & details p {
                border-radius: 10px;
                background-color: #f2f2f2;
                padding: 0.4rem 2rem;
                @media (max-width: 768px) {
                  margin: 0;
                }
              }
              & table {
                width: 100%;
                background-color: #fefefe;
                font-size: 1.4rem;
                border-radius: 10px;
                border-collapse: collapse;
                th {
                  border-bottom: solid 1px black;
                }
                td {
                  border-top: solid 1px #dedede;
                }
                td,
                th {
                  padding: 0.8rem 0.4rem;
                }
                tr {
                  text-align: center;
                }
              }
              & a {
                font-size: 1.6rem;
                text-decoration: underline;
                color: #3498db;
              }
              .gatsby-highlight pre {
                border-radius: 10px;
                font-size: 1.4rem;
              }
              .gatsby-highlight code {
                background-color: transparent;
                padding: 0;
              }
            `}
          >
            {children}
          </main>
          <Comments />
        </div>
        <Toc tableOfContents={data.mdx.tableOfContents} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        tags
        date(formatString: "YYYY.MM.DD")
        thumbnail_image_alt
        thumbnail_image_credit_link
        thumbnail_image_credit_text
        thumbnail_image {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
      }
      tableOfContents
    }
  }
`;

export const Head = ({ data }: PageProps<DataProps>) => (
  <SEO
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.subtitle}
    keywords={data.mdx.frontmatter.tags}
    publishDate={data.mdx.frontmatter.date}
    image={data.mdx.frontmatter.thumbnail_image.publicURL}
  />
);

export default BlogPost;
