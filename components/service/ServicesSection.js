/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { CustomLink, DocLink } from "../../utils/prismicHelpers";

const ServicesSection = ({ slice }) => {
  // console.log(slice);
  const {
    heading,
    subheading,
    diseases_col_1,
    diseases_col_2,
    diseases_col_3,
    diseases_col_4,
    diseases_col_5,
  } = slice?.primary;
  return (
    <section className="wrapper pt-14 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-lg-10 mx-auto">
            <h3 className="fs-16 text-uppercase text-muted mb-3">
              {subheading[0]?.text}
            </h3>
            <h2 className="display-4 mb-10 px-xl-10">{heading[0]?.text}</h2>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
            style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: 0 }}
          ></div>
          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
          ></div>
          <div className="row gx-md-5 gy-5 text-center justify-content-center">
            {slice?.items?.map((item, index) => (
              <ServiceItem key={index} data={item} />
            ))}
          </div>
        </div>
        {diseases_col_1?.[0]?.text && (
          <div className="mt-12">
            <div className="mt-4  ">
              <h6 className="me-2">Other Reversal Programs:</h6>{" "}
              <div className="row">
                <div className="col mb-4">
                  {diseases_col_1?.map((item, index) => (
                    <BadgeItem key={index} title={item?.text} color="red" />
                  ))}
                </div>
                <div className="col mb-4">
                  {diseases_col_2?.map((item, index) => (
                    <BadgeItem key={index} title={item?.text} color="green" />
                  ))}
                </div>
                <div className="col mb-4">
                  {diseases_col_3?.map((item, index) => (
                    <BadgeItem key={index} title={item?.text} color="yellow" />
                  ))}
                </div>
                <div className="col mb-4">
                  {diseases_col_4?.map((item, index) => (
                    <BadgeItem key={index} title={item?.text} color="sky" />
                  ))}
                </div>
                <div className="col mb-4">
                  {diseases_col_5?.map((item, index) => (
                    <BadgeItem key={index} title={item?.text} color="purple" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {!diseases_col_1 && (
          <div className="text-center mt-5">
            <Link href="/services	">
              <a className="btn btn-outline-primary mt-2">
                View All Reversal Programs
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const BadgeItem = ({ title, color }) => {
  return (
    <div>
      <span className={`badge  text-dark bg-pale-${color} me-2 mb-1`}>
        {title}
      </span>
    </div>
  );
};

const ServiceItem = ({ data }) => {
  const { icon, title, details, link } = data;
  // console.log(data);
  return (
    <div className="col-md-6 col-xl-3">
      <div className="card shadow-lg h-100">
        <div className="card-body h-100">
          {icon?.url && (
            <img
              src={icon?.url}
              alt={icon?.alt}
              className="icon-svg icon-svg-lg text-green mb-3"
            />
          )}
          <h4>{title[0]?.text}</h4>
          <div className="mb-2">
            <RichText render={details} serializeHyperlink={CustomLink} />
          </div>
          {link?.uid && (
            <DocLink link={link}>
              <span href="#" className="hover link-green">
                View Plan
              </span>
            </DocLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
