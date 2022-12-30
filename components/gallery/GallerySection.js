/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaPlay } from "react-icons/fa";

const GallerySection = ({ slice }) => {
  // console.log(slice);
  const { heading } = slice?.primary;
  const [viewAll, setViewAll] = useState(false);

  const [sources, setSources] = useState([]);
  // ===== SLIDE STATE =====
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  // ===== HANDLE SLIDE NUMBER =====
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };
  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    let tempSources = [];
    slice.items.map((item) => {
      item.video_link.link_type == "Web"
        ? tempSources.push(item?.video_link?.url)
        : tempSources.push(item?.image?.url);
    });
    setSources(tempSources);
    return () => {
      setSources([]);
    };
  }, [slice]);

  return (
    <section className="wrapper bg-light">
      <div className="overflow-hidden">
        <div className="container pt-14 pt-md-16">
          <div className="row">
            <div className="col-xl-7 col-xxl-6 mx-auto text-center">
              <h2 className="display-5 text-center mt-2 mb-10">
                {heading[0]?.text}
              </h2>
            </div>
          </div>

          <div className="pb-2 row ">
            {slice?.items?.map((item, index) => {
              return viewAll ? (
                <GalleryItem
                  key={index}
                  data={item}
                  index={index}
                  openLightboxOnSlide={openLightboxOnSlide}
                />
              ) : (
                index < 4 && (
                  <GalleryItem
                    key={index}
                    data={item}
                    index={index}
                    openLightboxOnSlide={openLightboxOnSlide}
                  />
                )
              );
            })}
          </div>
          {!viewAll && (
            <div className="text-center">
              <button
                onClick={() => setViewAll(true)}
                className="btn btn-outline-primary btn-sm mt-4"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
    </section>
  );
};

const GalleryItem = ({ data, index, openLightboxOnSlide }) => {
  const { image, title } = data;
  return (
    <div className="col-md-6 col-lg-3 px-4 mb-5">
      <article
        style={{ cursor: "pointer" }}
        onClick={() => openLightboxOnSlide(index + 1)}
        className="h-100"
      >
        <div className="card h-100">
          <figure className="card-img-top overlay overlay-1 position-relative">
            <img src={image?.url} alt={image?.alt} />
            {/* <i>
              <FaPlay />
            </i> */}
          </figure>
          <div className="card-body p-1 px-3">
            <div className="post-header">
              <h4 className="h5 mt-1 mb-1 text-center">{title[0]?.text}</h4>
            </div>

            {/* <div className='post-footer'>
							<ul className='post-meta d-flex mb-0'>
								<li className='post-date'>
									<i className='uil uil-calendar-alt'></i>
									<span>14 Apr 2022</span>
								</li>
								<li className='post-comments'>
									<a href='#'>
										<i className='uil uil-comment'></i>4
									</a>
								</li>
							</ul>
						</div> */}
          </div>
        </div>
      </article>
      <style jsx>{`
        .card-img-top i {
          font-size: 22px;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: #00000052;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
