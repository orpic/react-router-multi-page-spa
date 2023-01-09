// Router and imports
import { Redirect, Route, Switch } from "react-router-dom";
import {
  Welcome,
  welcomePath,
  Products,
  productsPath,
  ProductDetail,
  productDetailPath,
} from "./pages";
import { MainHeader } from "./components";

//Css imports
import "./App.css";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to={welcomePath} />
          </Route>
          <Route path={welcomePath}>
            <Welcome />
          </Route>
          <Route path={productsPath} exact>
            <Products />
          </Route>
          <Route path={productsPath + "/:productId"}>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//domain.com/{productDetailPath}/: dynamic segment(anything)
