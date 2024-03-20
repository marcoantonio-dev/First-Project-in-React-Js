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
          <button className="Botao">Saiba Mais</button>
        <div className="Texto">
        <p className="Texto_na_imagem">
        Planeje projetos para construções e muito mais. Com planejamento cuidadoso e visão clara, transforme ideias em realidade.
        Cada etapa é crucial para o sucesso. Ao considerar todos os aspectos, garanta um resultado que atenda às suas necessidades. 
        Com criatividade e dedicação, alcance resultados surpreendentes e crie espaços encantadores  
         </p>
        </div>
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
