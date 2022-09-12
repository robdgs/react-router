//MODO UNO, senza usare react router dom

// import { useState } from "react";
// import "./App.css";
// import { Home, Catalog, Recipe } from "./pages";

// function App() {

  // const [route, setRoute] = useState("home");
  // return (
  //   <div className="App">
  //     <nav>
  //       <ul>

  //         {/* <li>
  //           <button onClick={() => setRoute("home")}>Home</button>
  //         </li>
  //         <li>
  //           <button onClick={() => setRoute("catalog")}>Catalog</button>
  //         </li>
  //         <li>
  //           <button onClick={() => setRoute("recipe")}>Recipe</button>
  //         </li> */}
  //         {/* posso comprimere le righe da 11 a 19 in questo modo: */}

  //         {["home", "catalog", "recipe"].map((key) => (
  //           <li key={key}>
  //             <button disabled={route===key} onClick={() => setRoute(key)}>{key}</button>
  //           </li>
  //         ))}

  //       </ul>
  //     </nav>
  //     {route === "home" && <Home />}
  //     {route === "catalog" && <Catalog />}
  //     {route === "recipe" && <Recipe />}

  //   {/* con questo modo di scrivere il routing, al refresh della pagina mi ritroverò 
  //   di nuovo in home, e da utente non è il massimo.
  //   potrei implementare la cosa usando urlSearchParams ma sarebbe veramente difficile da sviluppare
  //    */}
  //   </div>
//   );
// }

// export default App;


//CON REACT ROUTER DOM:


import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalog, ErrorPage } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}