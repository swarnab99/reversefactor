import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../utils/prismicHelpers";
import { queryRepeatableDocuments } from "../utils/queries";
import PrismicClient from "../utils/prismicClient";
import gql from "graphql-tag";
import SEO from "../components/seo/SEO";
import BlogPostSection from "../components/blog/BlogPostSection";
import BlogsSection from "../components/blog/BlogsSection";
import Footer from "../components/footer/Footer";
import DynamicModal from "../components/modal/DynamicModal";

const BlogPost = ({ doc, footer, blogPosts }) => {
  // console.log(doc);
  // ========== LOZAD INSTANTIATE ==========
  useEffect(() => {
    const observer = lozad(".lozad", {
      rootMargin: "100px 0px", // syntax similar to that of CSS Margin
    });
    observer.observe();
    return () => {};
  }, [doc?.uid]);
  // ========== END ==========
  return (
    <>
      <SEO
        doc={doc}
        url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.in/${doc?.uid}`}
      />
      <BlogPostSection blogPost={doc} />
      <BlogsSection blogPosts={blogPosts} />
      <Footer data={footer.data} />
      <DynamicModal />
    </>
  );
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "blog_post"
  );
  return {
    paths: documents.map((doc) => {
      return { params: { slug: doc.uid } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  preview = null,
  previewData = {},
  params,
}) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getByUID("blog_post", params.slug, ref ? { ref } : null)) ||
    {};
  const footer =
    (await client.getSingle("footer_section", ref ? { ref } : null)) || {};

  const pClient = PrismicClient;
  const blogPosts = await pClient.query({
    query: gql`
      query {
        allBlog_posts(sortBy: published_date_DESC, first: 3) {
          edges {
            node {
              title
              description
              featured_image
              published_date
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
  });

  if (doc.id == undefined) {
    return {
      props: null,
      notFound: true,
    };
  }

  return {
    props: {
      doc,
      footer,
      preview,
      blogPosts,
    },
    revalidate: 60,
  };
}

export default BlogPost;
