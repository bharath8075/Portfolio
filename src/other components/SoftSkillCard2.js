function SoftSkillCard2(props) {
  return (
    <div
      id="skillCard"
      className="card text-center border-0 d-block w-100"
      style={{ minHeight: "80px", padding: "1rem" }}
    >
      <div className="card-body d-flex flex-column align-items-center">
        <i className={`${props.logo} fa-3x mb-3`}></i>
        <p className="card-title fw-semibold ">{props.skill}</p>
      </div>
    </div>
  );
}
export default SoftSkillCard2;
