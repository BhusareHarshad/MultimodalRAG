import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
      <div className="text-gray-700">© 2024</div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/harshad-bhusare-a214a0146/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/BhusareHarshad/MultimodalRAG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};
