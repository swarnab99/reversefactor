/* eslint-disable @next/next/no-img-element */
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import exitIntent from "exit-intent";
import Link from "next/link";

const DynamicModal = () => {
  // console.log(slice);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (screen.width > 991) {
      setTimeout(() => {
        const removeExitIntent = exitIntent({
          threshold: 10,
          eventThrottle: 50,
          onExitIntent: () => {
            setShowModal(true);
          },
        });
        return () => {
          removeExitIntent();
        };
      }, 5000);
    } else {
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
    }
  }, []);

  return (
    <>
      <div className={`${showModal ? "modal-show" : "d-none"}`}>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center modal-container h-100">
            <div className="col-md-10 col-lg-6 position-relative">
              <div className="close-btn" onClick={() => setShowModal(false)}>
                <AiOutlineClose />
              </div>
              <Link className="" href="/contact">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowModal(false)}
                  className="w-100"
                  src="https://images.prismic.io/reversefactor/5eedc8e5-fcd9-4be4-b09a-f7280251c5f7_have+query+modal.png?auto=compress,format"
                  alt="Have a Query"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-show {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block !important;
          opacity: 1 !important;
          background-color: #00000085;
          z-index: 9999 !important;
        }
        .modal-container {
          //height: 100vh;
        }
        .close-btn {
          position: absolute;
          top: 8px;
          left: 20px;
          font-size: 20px;
          background-color: #000;
          color: #fff;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
        }
        @media (max-width: 759px) {
        }
        @media (min-width: 760px) {
        }

        @media (min-width: 991px) {
        }
      `}</style>
    </>
  );
};

export default DynamicModal;
