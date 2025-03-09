function GitHubBtn(props) {
  let url = props.link;
  return (
    <div className="github-btn position-absolute top-0 start-0 m-2">
      <button
        className="btn btn-sm btn-dark border-light"
        onClick={() => window.open(url, "_blank")}
      >
        GitHub
      </button>
    </div>
  );
}

export default GitHubBtn;
