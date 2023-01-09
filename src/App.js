// Router and imports
import { Route } from "react-router-dom";
import { Welcome, welcomePath, Products, productsPath } from "./pages";
import { MainHeader } from "./components";

//Css imports
import "./App.css";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <main>
        <Route path={welcomePath}>
          <Welcome />
        </Route>
        <Route path={productsPath}>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
