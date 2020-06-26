import React, { useEffect, useState } from "react";
//import logo from './logo.svg';
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function FetchAPI() {
      const api = await fetch("https://api.github.com/users/asad149/repos");

      const json = await api.json();
      console.log(json);
      setRepos(json);
    }
    FetchAPI();
  }, []);

  return (
    <div className="App">
      <ul>
        {repos.map((repoObj, ind) => {
          return (
            <li key={ind}>
              <h2>{repoObj.name}</h2>
            </li>
          );
        })}
      </ul>

      <h1>My GitHub Repositries..!</h1>
    </div>
  );
}

export default App;
