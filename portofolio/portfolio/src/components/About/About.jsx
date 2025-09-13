import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// replace with your actual image path
import CertificateImg from "../About/Udacity.jpg";
import "../About/About.css";

export default function About() {
  return (
    <section id="about" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">About Me</h2>
      <section className="row align-items-center">
        {/* Description & Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          {/* <img
            src={myPhoto}
            alt="Harun Suleiman"
            className="img-fluid rounded-3 shadow"
            style={{ maxHeight: "350px" }}
          /> */}
          <p className="mt-3 text-muted">
            I am a passionate <strong>Front-End Website Developer</strong>{" "}
            specializing in building dynamic and responsive web applications
            with <strong>React.js</strong>. My strong background in{" "}
            <strong>
              HTML, CSS, Media Query, Bootstrap, JavaScript, and jQuery
            </strong>{" "}
            provides me with a solid foundation, but React is where I truly
            excel—crafting reusable components, managing State efficiently, and
            delivering smooth user experiences.
            <br />
            <br />I enjoy turning ideas into interactive, high-performance
            interfaces and continuously push myself to stay ahead with the
            latest React best practices. While front-end development is my core
            strength, I am also expanding into back-end technologies to become a
            complete full-stack developer.
          </p>
        </div>

        {/* Skills Section */}
        <div className="col-md-6 ">
          <div className="p-4 rounded shadow bg-light">
            <h4 className="mb-3 fw-semibold">
              {" "}
              <center>Solid background on</center>{" "}
            </h4>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary p-2">HTML</span>
              <span className="badge bg-secondary p-2">CSS</span>
              <span className="badge bg-success p-2">Media Query</span>
              <span className="badge bg-danger p-2">Bootstrap</span>
              <span className="badge bg-warning text-dark p-2">JavaScript</span>
              <span className="badge bg-info text-dark p-2">jQuery</span>
              <span className="badge bg-dark p-2">React.js</span>
              <span className="badge bg-success p-2">GitHub</span>
            </div>
          </div>
        </div>
      </section>
      <section className="certificate-section py-5 ">
        <div className="container ">
          <h2 className="text-center mb-4 cert-title">Certifications</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div
                style={{ background: " #f8f8f8" }}
                className="card shadow-lg p-4 text-center cert-card border-0 bg-light"
              >
                {/* <img
                  src={CertificateImg}
                  alt="Udacity Certificate"
                  className="img-fluid cert-img mb-3"
                /> */}
                <h5 className="fw-bold">Fundamentals of Programming</h5>
                <p className="text-muted">
                  Awarded by{" "}
                  <a
                    href="https://www.udacity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    Udacity
                  </a>
                </p>
                <a
                  href="https://www.udacity.com/certificate/e/a1614098-f286-11ef-9d79-fba352ced2fb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="training" className="container my-1 ">
        <div className="bg-white shadow-md  p-4 m-2 rounded-3 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frontend Web Development From
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-3">
            Evangadi Tech
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Successfully completed an immersive Frontend website development,
            mastering:
          </p>
          <ul className=" ul  mb-4">
            <li>
              <strong>Front-end:</strong> HTML, CSS, JavaScript, Bootstrap,
              React.js,media query
            </li>
            {/* <li>
              <strong>Back-end:</strong> Node.js, Express.js, REST APIs
            </li> */}
            {/* <li>
              <strong>Databases:</strong> MySQL, MongoDB
            </li> */}
            <li>
              <strong>Other Skills:</strong> UI/UX design, responsive layouts,
              project deployment,Git & GitHub
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Built multiple{" "}
            <span className="font-semibold">real-world projects </span>
            applying agile workflows and version control (Git/GitHub).
          </p>
          <a
            href="https://www.evangadi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="Evan"
          >
            Learn more at Evangadi
          </a>
        </div>
      </section>
    </section>
  );
}
