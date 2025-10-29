import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-top py-5 text-white">
        <div className="container">
          <div className="row text-center">
            {/* Location */}
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">LOCATION</h4>
              <p className="mb-0">
                2215 John Daniel Drive <br />
                <br />
                Clark, MO 65243
            </p>
            </div>

            {/* Social */}
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/mahmoud.rashedy.528982" className="footer-icon d-flex justify-content-center align-items-center" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-alrashedy-29a8442a7/" className="footer-icon d-flex justify-content-center align-items-center" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/Mahmoud68243507" className="footer-icon d-flex justify-content-center align-items-center" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/mahmoud_rashedy17/" className="footer-icon d-flex justify-content-center align-items-center" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-3">ABOUT FREELANCER</h4>
              <p className="mb-0 small">
                Freelance is a free to use, licensed Bootstrap theme created by <h5>AlRashedy</h5>
               </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom text-center py-3 text-white">
        Copyright © Your Website 2025
      </div>
    </>
  );
}
