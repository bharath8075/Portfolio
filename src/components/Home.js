import animeMe from "../pictures/AnimatedME.png";
import Resume from "../Resume/SelvaBharathResume.pdf";
function Home() {
  return (
    <>
      <section className="section" id="home">
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="text-center">
            <img
              className="bg-transparent"
              src={animeMe}
              style={{ width: "100px" }}
            ></img>
            <h4 className="pt-2">Hi! I'm Selva Bharath R</h4>
            <p className="display-3 ">Full Stack Developer</p>
            <a href="#project">
              <button
                href="#project"
                className="btn btn-dark  rounded-pill px-4"
              >
                Projects
              </button>
            </a>
            &nbsp;
            <a href={Resume} download="Selva-Bharath-Resume">
              <button className="btn btn-outline-dark ms-2">
                My Resume &nbsp; <i class="bi bi-download"></i>
              </button>
            </a>
            <p className="mt-4">
              <a
                style={{ textDecoration: "none" }}
                className="text-dark font-monospace"
                target="_blank"
                href="https://www.linkedin.com/in/selva-bharath-r"
              >
                Linked<i class="bi bi-linkedin"></i>
              </a>
              &nbsp; |&nbsp;
              <a
                style={{ textDecoration: "none" }}
                className="text-dark font-monospace"
                target="_blank"
                href="https://github.com/bharath8075"
              >
                Github <i class="bi bi-github"></i>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
