function ViewBtn(props) {
  let url = props.link;

  return (
    <div className="view-btn position-absolute top-0 end-0 m-2">
      <button
        className="btn btn-sm btn-dark border-light"
        onClick={() => window.open(url, "_blank")}
      >
        Live
      </button>
    </div>
  );
}

export default ViewBtn;
