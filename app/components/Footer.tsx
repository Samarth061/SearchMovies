import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-semantic-background-primary border-t border-semantic-border-default p-4 sm:p-6 text-semantic-text-primary">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-md sm:text-sm">
          <p>
            Created by{" "}
            <span className="font-semibold text-semantic-text-primary">
              Samarth Shah
            </span>
          </p>
        </div>

        {/* Right Side - Contact */}
        <div className="flex flex-row gap-3 sm:gap-6">
          <a
            href="mailto:samarthdshah12@gmail.com"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors text-lg sm:text-sm"
          >
            Email
          </a>

          <a
            href="https://github.com/Samarth061"
            target="_blank"
            rel="noopener noreferrer"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors flex items-center gap-1 text-lg sm:text-sm"
          >
            <FaGithub /> <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samarth-shah-319806224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors flex items-center gap-1 text-lg sm:text-sm"
          >
            <FaLinkedin /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
