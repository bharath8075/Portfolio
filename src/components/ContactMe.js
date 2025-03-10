import axios from "axios";
import { useState } from "react";
import skillPic from "../InformationObjects/skill";

function ContactMe() {
  var dat = new Date();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  let fieldError = "All fields are required";
  let successMessage = "Email sent successfully!";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      setToastMessage(fieldError);
      setTimeout(() => setToastMessage(""), 3000);
      return;
    }

    const serviceId = "service_svawbiw";
    const templateId = "template_lpwqien";
    const userId = "t2HVWbYnw9zOywxFa";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_email: email,
        from_subject: subject,
        to_name: "Selva Bharath R",
        message: message,
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((res) => {
        setToastMessage(successMessage);
        setTimeout(() => setToastMessage(""), 3000);
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        setToastMessage(err.response?.data?.message || "Failed to send email");
        console.log(err.data);
      });
  };

  return (
    <>
      <section className="section" id="contact">
        <div className="container d-flex flex-column justify-content-center align-items center min-vh-100">
          <h4 className="text-center my-2">Contact Me</h4>
          <h4 className="display-6 text-center my-2">Get in touch</h4>
          <p className="font-monospace text-center my-2">
            I'd love to hear from you! If you have any Questions, Comments or
            Feedback please use the form below.
          </p>
          <div id="form-card" className="card mx-auto mt-4">
            <div className="card-body">
              <form className="form mx-auto" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="my-3">
                      <label className="font-monospace form-label">Email</label>
                      <input
                        className="form-control border-dark"
                        type="email"
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="my-3">
                      <label className="font-monospace form-label">
                        Subject
                      </label>
                      <input
                        className="form-control border-dark"
                        type="text"
                        placeholder="Business"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="font-monospace form-label">Message</label>
                    <textarea
                      className="form-control border-dark"
                      rows={3}
                      value={message}
                      placeholder="Leave a comment or ask a question."
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="form-group d-grid col-12 col-sm-8 col-md-6 mt-4 mx-auto">
                  <button className="btn rounded-pill btn-dark">
                    Submit &nbsp;<i class="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {toastMessage && (
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              className={`toast show`}
              role="alert"
              data-animation="true"
            >
              {toastMessage === successMessage ? (
                <div className="toast-header text-bg-success">
                  <i className="bi bi-check-circle-fill text-white"></i>
                  <strong className="mx-2">Success &nbsp; -</strong>
                  <div className="toast-body">{successMessage}</div>
                  <button
                    type="button"
                    className="btn-close ms-auto me-2"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              ) : (
                <div className="toast-header text-bg-danger">
                  <i className="bi bi-exclamation-triangle-fill text-white"></i>
                  <strong className="mx-2">Failed &nbsp; -</strong>
                  <div className="toast-body">{toastMessage}</div>
                  <button
                    type="button"
                    className="btn-close ms-auto me-2"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white text-center  mt-auto py-3">
        <p className="mb-0 font-monospace">
          © {dat.getFullYear()} Selva Bharath R. All Rights Reserved.
        </p>
        <h4 className="mt-3 lead">Built using</h4>
        <img
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          }
          style={{ maxWidth: "1.5rem" }}
        />
        &nbsp; &nbsp;
        <img
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          }
          style={{ maxWidth: "1.5rem" }}
        />{" "}
        &nbsp;
        <img
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          }
          style={{ maxWidth: "1.5rem", color: "white" }}
        />
      </footer>
    </>
  );
}

export default ContactMe;
