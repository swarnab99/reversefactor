import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../utils/prismicHelpers";
import SEO from "../components/seo/SEO";
import BlogPostSection from "../components/blog/BlogPostSection";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = ({ doc, footer }) => {
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
        url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.in/privacy-policy`}
      />
      <BlogPostSection blogPost={doc} />
      <Footer data={footer.data} />
    </>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const doc =
    (await client.getSingle("privacy_policy", ref ? { ref } : null)) || {};
  const footer =
    (await client.getSingle("footer_section", ref ? { ref } : null)) || {};

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
    },
    revalidate: 60,
  };
}
export default PrivacyPolicy;
