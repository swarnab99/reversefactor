import { useEffect } from "react";
import lozad from "lozad";
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from "../../utils/queries";
import { SliceZone } from "../../slices";
import SEO from "../../components/seo/SEO";
import Footer from "../../components/footer/Footer";
import DynamicModal from "../components/modal/DynamicModal";

const ServicePage = ({ doc, footer }) => {
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
        url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.in/plan/${doc?.uid}`}
      />
      <SliceZone sliceZone={doc.data.body} />
      <Footer data={footer.data} />
      <DynamicModal />
    </>
  );
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "service_page"
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
    (await client.getByUID(
      "service_page",
      params.slug,
      ref ? { ref } : null
    )) || {};

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

export default ServicePage;
