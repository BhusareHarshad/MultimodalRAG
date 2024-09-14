import makeinindia from '../assets/mii.png'

export const Header = () => {
  return (  
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      <img src={makeinindia} className="w-24 h-auto"/>
      <div className="flex items-center">
        <a
          href="https://github.com/BhusareHarshad/MultimodalRAG"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 mr-4 hover:text-gray-900 underline"
        >
          GitHub
        </a>
        <a
          href="/signin"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </a>
      </div>
    </header>
  );
};
