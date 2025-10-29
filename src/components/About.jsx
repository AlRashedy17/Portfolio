import React from "react";
export default function About() {
  return (
    <section className="about-section text-white text-center d-flex flex-column justify-content-center align-items-center">
      <div className="container py-5">
        <h2 className="fw-bold mb-3 about-title">ABOUT COMPONENT</h2>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="linee me-2"></div>
          <span className="starr fs-4"><i class="fa-solid fa-star"></i></span>
          <div className="linee ms-2"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <p>
              Freelancer is a free bootstrap theme created by AlRashedy . The download
              includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Freelancer is a free bootstrap theme created by AlRashedy. The download
              includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
