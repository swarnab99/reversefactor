/* eslint-disable @next/next/no-img-element */
import { RichText } from "prismic-reactjs";
import { CustomLink, DocLink } from "../../utils/prismicHelpers";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";

const AboutSection = ({ slice }) => {
  console.log(slice);
  const [loop, setLoop] = useState("");
  const [arrow, setArrow] = useState(false);
  const {
    heading,
    description,
    image,
    image1,
    image2,
    image3,
    image4,
    lead_text,
    button_link,
    button_text,
    full_width,
    swap,
  } = slice?.primary;

  if (image1?.url) {
    setLoop("loop");
    setArrow(true);
  }

  return (
    <section className="container">
      <div
        className={`row gx-lg-8 gx-xl-12 gy-10 mt-12 align-items-center ${
          swap ? "flex-row-reverse" : ""
        }`}
      >
        <div className={full_width ? "col-lg-12" : "col-lg-6"}>
          <h2 className="display-4 mb-3">{heading[0]?.text}</h2>
          <p className="lead fs-lg">{lead_text[0]?.text}</p>
          <div className="mb-6">
            <RichText render={description} serializeHyperlink={CustomLink} />
          </div>
          {button_text[0]?.text && (
            <div className="mt-3">
              <DocLink link={button_link}>
                <span className="btn btn-primary mt-2">
                  {button_text[0]?.text}
                </span>
              </DocLink>
            </div>
          )}
        </div>
        {image?.url && (
          <div className="col-md-8 col-lg-6 position-relative">
            <div
              className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
              style={{ top: "-2rem", left: "-1.9rem" }}
            ></div>
            <Splide
              options={{
                type: loop,
                perPage: 1,
                perMove: 1,
                arrows: arrow,
                pagination: arrow,
                autoplay: true,
                interval: 2000,
                lazyLoad: "nearby",
              }}
            >
              {/* ===== image1 ===== */}
              {image?.url && (
                <SplideSlide>
                  <figure className="rounded">
                    <img src={image?.url} alt={image?.alt} />
                  </figure>
                </SplideSlide>
              )}

              {/* ===== image2 ===== */}
              {image1?.url && (
                <SplideSlide>
                  <figure className="rounded">
                    <img src={image1?.url} alt={image1?.alt} />
                  </figure>
                </SplideSlide>
              )}

              {/* ===== image3 ===== */}
              {image2?.url && (
                <SplideSlide>
                  <figure className="rounded">
                    <img src={image2?.url} alt={image2?.alt} />
                  </figure>
                </SplideSlide>
              )}

              {/* ===== image4 ===== */}
              {image3?.url && (
                <SplideSlide>
                  <figure className="rounded">
                    <img src={image3?.url} alt={image3?.alt} />
                  </figure>
                </SplideSlide>
              )}

              {/* ===== image5 ===== */}
              {image4?.url && (
                <SplideSlide>
                  <figure className="rounded">
                    <img src={image4?.url} alt={image4?.alt} />
                  </figure>
                </SplideSlide>
              )}
            </Splide>
          </div>
        )}
      </div>
      <style jsx>{`
        .shape.rellax {
          z-index: 0;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
