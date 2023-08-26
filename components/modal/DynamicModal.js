/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { GrFormClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import exitIntent from "exit-intent";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

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
      }, 15000);
    }
  }, []);

  // ===== form section =====
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await base("Popup Queries").create([
        {
          fields: {
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email,
            City: formData.city,

            Source: location.href,
            Status: "Todo",
          },
        },
      ]);

      // console.log(data);

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
      });
      setSuccess(true);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`${showModal ? "modal-show" : "d-none"}`}>
        <div className="container h-100">
          <div className="row mx-0 justify-content-center align-items-center modal-container h-100">
            <div className="col-md-10 col-lg-10 position-relative">
              <div className="close-btn" onClick={() => setShowModal(false)}>
                <GrFormClose />
              </div>
              <div className="row box-container">
                <div
                  className="d-none d-lg-flex justify-content-center align-items-center col-lg-6 p-0"
                  style={{ lineHeight: "0", overflow: "hidden" }}>
                  <img
                    className="w-100 lozad"
                    data-src="https://images.prismic.io/reversefactor/fd2cd6a0-bf87-4b83-90aa-6ef7739756a6_QueryPopup.png?auto=compress,format"
                    alt="QueryPopup"
                  />
                </div>
                <div className="col-lg-6 py-3  py-lg-10 px-4 px-sm-8">
                  <div className="text-center form-container">
                    <h2>Have a query? Let's talk</h2>
                    <p>
                      We firmly believes that chronic diseases are preventable
                      and reversible. Contact us to reverse yours.
                    </p>

                    <form onSubmit={handleSubmit} className="row form-box">
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 mt-3">
                          {loading ? "Sending..." : "Send"}
                        </button>
                      </div>
                      {error && (
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                          <p className="text-danger text-center h5">
                            {error.message}
                          </p>
                        </div>
                      )}
                      {success && (
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                          <p className="text-success text-center h5">
                            Thanks, we will contact you soon.
                          </p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
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
          top: 0px;
          right: 0px;
          font-size: 25px;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .box-container {
          background-color: #fff;
          border-radius: 0.4rem;
          overflow: hidden;
        }
        .form-container h2 {
          font-size: 25px;
          font-weight: 700;
        }
        .form-container p {
          padding: 10px 0;
          line-height: 1.3;
          margin: 0;
        }
        .form-box input {
          width: 100%;
          margin: 10px 0;
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

// <>
// <div className={`${showModal ? "modal-show" : "d-none"}`}>
//   <div className="container h-100">
//     <div className="row justify-content-center align-items-center modal-container h-100">
//       <div className="col-md-10 col-lg-6 position-relative">
//         <div className="close-btn" onClick={() => setShowModal(false)}>
//           <AiOutlineClose />
//         </div>
//         {/* <Link href="/contact">
//           <img
//             style={{ cursor: "pointer" }}
//             onClick={() => setShowModal(false)}
//             className="w-100"
//             src="https://images.prismic.io/reversefactor/5eedc8e5-fcd9-4be4-b09a-f7280251c5f7_have+query+modal.png?auto=compress,format"
//             alt="Have a Query"
//           />
//         </Link> */}
//       </div>
//     </div>
//   </div>
// </div>

// <style jsx>{`
//   .modal-show {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: block !important;
//     opacity: 1 !important;
//     background-color: #00000085;
//     z-index: 9999 !important;
//   }
//   .modal-container {
//     //height: 100vh;
//   }
//   .close-btn {
//     position: absolute;
//     top: 8px;
//     left: 20px;
//     font-size: 20px;
//     background-color: #000;
//     color: #fff;
//     width: 30px;
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     cursor: pointer;
//   }
//   @media (max-width: 759px) {
//   }
//   @media (min-width: 760px) {
//   }

//   @media (min-width: 991px) {
//   }
// `}</style>
// </>
