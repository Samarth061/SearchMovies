import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-semantic-background-primary border-t border-semantic-border-default p-6 text-semantic-text-primary">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="text-sm">
          <p>
            Created by{" "}
            <span className="font-semibold text-semantic-text-primary">Samarth Shah</span>
          </p>
        </div>

        {/* Right Side - Contact */}
        <div className="flex flex-row gap-6">
          <a
            href="mailto:samarthdshah12@gmail.com"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors"
          >
            Email
          </a>

          <a
            href="https://github.com/Samarth061"
            target="_blank"
            rel="noopener noreferrer"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/samarth-shah-319806224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-semantic-text-secondary hover:text-semantic-accent-primary transition-colors flex items-center gap-1"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
