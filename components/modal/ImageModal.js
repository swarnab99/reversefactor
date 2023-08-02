import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DocLink } from "../../utils/prismicHelpers";

const ImageModal = ({ slice }) => {
  const [showModal, setShowModal] = useState(false);

  const { image, link } = slice?.primary;

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000 * 10);
  }, []);

  return (
    <>
      {showModal && (
        <>
          <div className="modal__container">
            <div className="modal__box position-relative">
              <DocLink link={link}>
                <img
                  className="w-100"
                  key={image?.url}
                  src={image?.url}
                  alt={image?.alt}
                />
              </DocLink>
              <i className="close-btn" onClick={() => setShowModal(false)}>
                <AiOutlineCloseCircle />
              </i>
            </div>
          </div>
          <div className="bg-overlay" onClick={() => setShowModal(false)}></div>
        </>
      )}
      <style jsx>{`
        .modal__container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
          max-width: 559px;
          width: 100%;
          padding: 0 15px;
        }
        img {
          border-radius: 0.4rem;
          overflow: hidden;
        }
        .close-btn {
          position: absolute;
          top: 0;
          right: 6px;
          cursor: pointer;
          z-index: 99;
          font-size: 24px;
        }
        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.5;
          z-index: 99998;
        }
      `}</style>
    </>
  );
};

export default ImageModal;
