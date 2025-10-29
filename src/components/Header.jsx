import React from "react";

export default function Header() {
  return (
    <header
      className="min-vh-100 d-flex justify-content-center align-items-center text-white"
      style={{ backgroundColor: "#1abc9c", paddingTop: "80px" }}
    >
      <div className="text-center">
        <img
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
          // src="../public/assets/Avatar.jpeg"
          className="mb-3"
          alt="avatar"
          style={{ width: "180px" }}
        />
        <h1 className="fw-bolder">START FRAMEWORK</h1>
        <div className="d-flex align-items-center justify-content-center my-3">
          <div style={{ width: "60px", height: "4px", backgroundColor: "white" }}></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div style={{ width: "60px", height: "4px", backgroundColor: "white" }}></div>
        </div>
        <p className="fw-semibold">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}
