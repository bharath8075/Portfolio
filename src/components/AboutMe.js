import MyPic from "../pictures/Untitled design.png";
// import about from "../InformationObjects/";

function AboutMe() {
  return (
    <section className="section" id="about">
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
        <div className="text-center">
          <h1 className="display-4">About Me</h1>
        </div>
        {/* row */}
        <div className="container w-75">
          <div className="row d-flex justify-content-center g-0 mt-4 ">
            <div className="col-md-12 col-lg-4 d-flex justify-content-center">
              <img
                id="MyPic"
                src={MyPic}
                className="rounded-1 z-0 align-items-center"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  objectFit: "cover",
                }}
              ></img>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="card-body cursor-pointer p-3">
                <p id="description" className="card-text fst-italic col-auto">
                  I am a full-stack developer specializing in Java, Spring Boot,
                  React.js, and MySQL. With a background in English and a
                  passion for technology, I transitioned into the tech industry
                  and built expertise in both frontend and backend development.
                </p>
                <p id="description" className="card-text fst-italic col-auto">
                  I have hands-on experience in developing scalable web
                  applications, designing efficient database architectures, and
                  implementing robust server-side logic. My skills extend to
                  creating intuitive user interfaces, optimizing application
                  performance, and ensuring security best practices.
                </p>
                <p id="description" className="card-text fst-italic col-auto">
                  Currently, I am enhancing my problem-solving abilities by
                  learning Data Structures and Algorithms (DSA), strengthening
                  my ability to write efficient and optimized code. With a
                  continuous learning mindset and a strong analytical approach,
                  I strive to build high-quality, maintainable software
                  solutions that meet industry standards. Driven by innovation
                  and attention to detail, I am committed to delivering
                  impactful solutions that exceed expectations.
                </p>
              </div>

              {/* Inner Cards */}
              <div className="row mx-auto">
                {/* First card */}

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-2">
                  <div
                    id="innerCard"
                    className="card shadow-sm border-dark h-100"
                  >
                    <div className="card-body p-4 text-center">
                      <i class="bi bi-mortarboard-fill"></i>
                      <p className="card-title font-monospace">Education</p>
                      <p className="card-text ">
                        Fullstack Web Development - Java & BA in English
                      </p>
                    </div>
                  </div>
                </div>
                {/* Second card */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-2">
                  <div
                    id="innerCard"
                    className="card shadow-sm border-dark h-100"
                  >
                    <div className="card-body p-4 text-center">
                      <i class="bi bi-briefcase-fill"></i>
                      <p className="card-title font-monospace">Experience</p>
                      <p className="card-text">ex-Intern @ MashupStack</p>
                    </div>
                  </div>
                </div>
                {/* Third card */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 py-2">
                  <div
                    id="innerCard"
                    className="card shadow-sm  border-dark h-100"
                  >
                    <div className="card-body p-4 text-center">
                      <i class="bi bi-folder-fill"></i>
                      <p className="card-title font-monospace">Projects</p>
                      <p className="card-text">4+ Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
