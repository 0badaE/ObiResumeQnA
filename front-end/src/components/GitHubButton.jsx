function GitHubButton({ href }) {
  return (
    <a
      className="github-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open GitHub repository"
      title="GitHub repository"
    >
      <svg className="github-button__icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#github-icon" />
      </svg>
      <span>GitHub</span>
    </a>
  );
}

export default GitHubButton;
