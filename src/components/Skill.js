import SkillCard from "../other components/SkillCard";
import skills from "../InformationObjects/skill";
function Skill() {
  const softSkill1 = {
    skill: "Communication",
    logo: "fas fa-comments",
  };
  const softSkill2 = {
    skill: "Adaptability",
    logo: "fas fa-sync-alt",
  };
  const softSkill3 = {
    skill: "Teamwork",
    logo: "fas fa-users",
  };
  const softSkill4 = {
    skill: "Time Management",
    logo: "fas fa-clock",
  };

  return (
    <section id="skill" className="section">
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center display-4">Skills & Technologies</h1>

        <div className="card border-0 align-items-center">
          <div className="card-body">
            <div className="row">
              {/* Skill List */}
              {skills.map((skill, index) => (
                <div key={index} className="col-6 col-sm-6 col-md-4 my-2">
                  <img
                    style={{ width: "2rem" }}
                    src={skill.img}
                    alt={skill.name}
                  />
                  <span className="ms-2 font-monospace fw-bold">
                    {skill.name}
                  </span>
                  <div className="progress mt-2" style={{ height: "20px" }}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                      style={{ width: skill.width }}
                    >
                      {skill.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="display-5 text-center mt-5">Other Skills</h3>
        {/* Carousel */}
        <div
          id="skillCarousel"
          className="carousel-slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <SkillCard skill={softSkill1.skill} logo={softSkill1.logo} />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <SkillCard skill={softSkill2.skill} logo={softSkill2.logo} />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <SkillCard skill={softSkill3.skill} logo={softSkill3.logo} />
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <SkillCard skill={softSkill4.skill} logo={softSkill4.logo} />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#skillCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#skillCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skill;
