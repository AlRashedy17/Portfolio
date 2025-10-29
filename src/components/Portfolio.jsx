import React, { useState } from "react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="portfolio-section py-5">
        <div className="container">
          <h2 className="text-center text-uppercase mb-5 fw-bold">
            Portfolio
          </h2>

          <div className="row g-4">

            {[
              "../public/assets/home.png",
              "../public/assets/cake.png",
              "../public/assets/flag.png",
              "../public/assets/home.png",
              "../public/assets/cake.png",
              "../public/assets/flag.png",
            ].map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="portfolio-card position-relative"
                  onClick={() => openModal(img)}
                >
                  <img src={img} className="img-fluid rounded" alt="portfolio" />
                  <div className="portfolio-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal-content">
            <img src={selectedImage} alt="enlarged" className="img-fluid" />
            <span className="close-btn" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </>
  );
}
