 import React from "react";
 
export default function Contact() {
  return (
    <section className="contact container py-5">
      <h2 className="text-center fw-bold mb-3 contact-title">CONTACT SECTION</h2>
      <h2 className="text-center fw-bold mb-3 contact-title">CONTACT SECTION</h2>
       <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="line me-2"></div>
        <span className="star"><i class="fa-solid fa-star"></i></span>
        <div className="line ms-2"></div>
      </div>

      <form className="mx-auto contact-form">
        <div className="mb-4">
          <label htmlFor="name" className="form-label small text-muted">userName :</label>
          <input type="text" id="name" className="form-control py-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="form-label small text-muted">userAge :</label>
          <input type="number" id="age" className="form-control py-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label small text-muted">userEmail :</label>
          <input type="email" id="email" className="form-control py-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label small text-muted">userPassword :</label>
          <input type="password" id="password" className="form-control py-2" />
        </div>

        <button className="btn btn-success px-4">send Message</button>
      </form>
    </section>
  );
}
