import RecipebookImage from "../pictures/Screenshot 2025-02-22 162725.png";
import MedicineImage from "../pictures/Screenshot 2025-02-22 102022.png";
import UrlShortener from "../pictures/UrlShortener.png";
import CurrencyConverter from "../pictures/CurrencyConverter.png";
import GitHubBtn from "../buttons/GithubBtn";
import ViewBtn from "../buttons/ViewBtn";
function Project() {
  return (
    <section className="section" id="project">
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h3 className="mt-4">Projects</h3>
        <h3 className="display-4">My Latest Works</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4  my-2">
          {/*First Card  */}
          <div className=" my-1">
            <div className="card mx-auto" style={{ maxWidth: "250px" }}>
              <img
                className="card-img-top"
                src={RecipebookImage}
                alt="Project Thumbnail"
              />

              {/* hovering button */}
              <GitHubBtn
                link={"https://github.com/bharath8075/RecipeBook-Frontend.git"}
              />

              <div className="card-body">
                <h6 className="card-title text-center">RecipeBook</h6>
                <p className="font-monospace card-text text-center">
                  Built using Springboot, React, MySQL
                </p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className=" my-1">
            <div className="card mx-auto" style={{ maxWidth: "250px" }}>
              <img
                className="card-img-top"
                src={MedicineImage}
                alt="Project Thumbnail"
              />
              {/* hovering buttons */}
              <GitHubBtn
                link={
                  "https://github.com/bharath8075/Medical-Store-Management-Site.git"
                }
              />
              <ViewBtn link={"https://flourishing-jelly-8b6496.netlify.app/"} />
              <div className="card-body">
                <h6 className="card-title text-center">Pharmacy Store</h6>
                <p className="font-monospace card-text text-center">
                  Built using React JS, Redux Toolkit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 justify-content-center">
          <div className=" my-1">
            <div className="card mx-auto" style={{ maxWidth: "250px" }}>
              <img
                className="card-img-top"
                src={UrlShortener}
                alt="Project Thumbnail"
              ></img>
              <div className="card-body">
                <GitHubBtn
                  link={"https://github.com/bharath8075/URL-Shortner.git"}
                />
                <h6 className="card-title text-center">Url Shortener</h6>
                <p className="font-monospace card-text text-center">
                  Built using springboot
                </p>
              </div>
            </div>
          </div>
          <div className=" my-1">
            <div className="card mx-auto" style={{ maxWidth: "250px" }}>
              <img
                className="card-img-top"
                src={CurrencyConverter}
                alt="Project Thumbnail"
              ></img>
              <div className="card-body">
                <GitHubBtn
                  link={"https://github.com/bharath8075/Currency_Converter.git"}
                />
                <h6 className="card-title text-center">Currency convertor</h6>
                <p className="font-monospace card-text text-center">
                  Built using springboot
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
