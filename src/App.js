//import logo from './logo.svg';
import casa3d from "./assets/casa3dBombada.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Arquitetura 3D</h1>
      </div>
      <header className="App-body">
        <img src={casa3d} className="Casa3D" alt="logo" />
        <p>
          Planeje projetos para a construção de casas ou prédios e muito mais
        </p>
        <a
          className="App-link"
          //href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="App-footer">

      </div>
    </div>
  );
}

export default App;
