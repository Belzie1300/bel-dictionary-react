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
        <footer>Coded by Belinda Dinh and is open-sourced</footer>
      </div>
    </div>
  );
}
