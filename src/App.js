import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          Coded by Belinda Dinh and is open-sourced on{" "}
          <a href="https://github.com/Belzie1300/bel-dictionary-react">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
