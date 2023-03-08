/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const VideoFeaturesSection = ({ slice }) => {
  // console.log(slice);
  const { heading, image, video_link } = slice?.primary;

  const [sources, setSources] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    let tempSources = [video_link?.url];

    setSources(tempSources);
    return () => {
      setSources([]);
    };
  }, [video_link]);

  return (
    <section className="wrapper bg-light">
      <div className="container pt-14 pt-md-16">
        <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
          <div className="col-md-8 col-lg-6 position-relative">
            {video_link?.url && (
              <button
                onClick={() => setToggler(!toggler)}
                className="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
              >
                <i>
                  <FaPlay className="p-1" />
                </i>
              </button>
            )}
            <div
              className="shape rounded bg-soft-green rellax d-md-block"
              style={{
                bottom: "-1.8rem",
                right: "-1.5rem",
                width: "85%",
                height: "90%",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <figure className="rounded">
              <img src={image?.url} alt={image?.alt} />
            </figure>
          </div>

          <div className="col-lg-5 col-xl-4 offset-lg-1">
            <h2 className="display-4 mb-7">{heading[0]?.text}</h2>
            {slice?.items?.map((item, index) => (
              <VideoFeatureItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={sources}
        disableLocalStorage={true}
      />
    </section>
  );
};

const VideoFeatureItem = ({ data }) => {
  const { title, icon, details } = data;
  return (
    <div className="d-flex flex-row mb-5">
      <div>
        <img
          src={icon?.url}
          alt={icon?.alt}
          className="icon-svg icon-svg-md text-yellow me-5"
        />
      </div>
      <div className="video-feature-item">
        <h4 className="mb-1">{title[0]?.text}</h4>
        <RichText render={details} linkResolver={linkResolver} />
      </div>
    </div>
  );
};

export default VideoFeaturesSection;
