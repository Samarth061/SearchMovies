import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full mx-auto bg-semantic-background-secondary/80 hover:bg-semantic-background-secondary transition-colors duration-400 ease-in-out backdrop-blur-sm shadow-semantic-border-default/20 shadow-xl">
      <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between h-auto sm:h-16 py-3 sm:py-0 gap-3 sm:gap-0">
          {/* Left Side - Creator Info */}
          <div className="flex items-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-semantic-text-primary text-center sm:text-left">
              Created by{" "}
              <span className="font-semibold text-semantic-text-primary hover:text-semantic-accent-secondary transition-colors">
                Samarth Shah
              </span>
            </p>
          </div>

          {/* Right Side - Contact Links */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8">
            <a
              href="mailto:samarthdshah12@gmail.com"
              className="text-xs sm:text-sm md:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium"
            >
              Email
            </a>

            <a
              href="https://github.com/Samarth061"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium flex items-center gap-1"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:hidden md:inline">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/samarth-shah-319806224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-semantic-text-secondary hover:text-semantic-accent-secondary transition-colors font-medium flex items-center gap-1"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:hidden md:inline">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
