import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App m-5">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer m-5">
          This project was coded by Shanay Hazell and is {""}
          <a
            href="https://github.com/ShanayH/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          {/* later you can add a src to your personal page as well */}
        </footer>
      </div>
    </div>
  );
}

export default App;
