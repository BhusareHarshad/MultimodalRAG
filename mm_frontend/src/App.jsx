import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import "./styles/globals.css";
import makeinindia from "./assets/mii.png";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow p-4">
          <img src={makeinindia} alt="Logo" className="mb-4" />
          <h2
            className="text-center text-2xl font-light mb-4 text-black"
            style={{
              fontFamily: "Arial, sans-serif", // Set to Arial and sans-serif
              letterSpacing: "0.5px",
            }}
          >
            Effortless Transcription, Instant Queries, and Seamless
            Conversations
          </h2>
          <h2
            className="text-center text-2xl font-light mb-4 text-blue-700"
            style={{
              fontFamily: "Arial, sans-serif", // Set to Arial and sans-serif
              letterSpacing: "0.5px",
            }}
          >
            All in One Click!
          </h2>
          <input
            type="text"
            id="custom-input"
            required
            placeholder="Enter URL..."
            className="mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="button-custom">Generate</button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
