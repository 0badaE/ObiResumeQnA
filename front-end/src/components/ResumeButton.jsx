function ResumeButton({ href }) {
  return (
    <a
      className="top-action top-action--left"
      href={href}
      download
      aria-label="Download Obada Erfan's resume"
      title="Download resume"
    >
      <svg
        className="top-action__icon"
        viewBox="0 0 19 19"
        role="presentation"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.5 1.875a.875.875 0 0 1 .875.875v6.64l2.316-2.316a.875.875 0 1 1 1.238 1.237l-3.816 3.817a.875.875 0 0 1-1.238 0L5.059 8.311A.875.875 0 0 1 6.296 7.07l2.329 2.33V2.75a.875.875 0 0 1 .875-.875ZM3.5 12.25a.875.875 0 0 1 .875.875v1.75c0 .483.392.875.875.875h8.5a.875.875 0 0 0 .875-.875v-1.75a.875.875 0 1 1 1.75 0v1.75A2.625 2.625 0 0 1 13.75 18H5.25a2.625 2.625 0 0 1-2.625-2.625v-1.75a.875.875 0 0 1 .875-.875Z"
          clipRule="evenodd"
        />
      </svg>
      <span>Resume</span>
    </a>
  );
}

export default ResumeButton;
