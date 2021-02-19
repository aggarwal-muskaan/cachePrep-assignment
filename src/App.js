// import logo from './logo.svg';
// import './App.css';
import { Cart } from "./contexts/cart.context";
import { Drawer } from "./contexts/drawer.context";
import AllCourses from "./components/AllCourses";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Cart>
        <Header />
        <Drawer>
          <Switch>
            <Route exact path="/" render={() => <AllCourses />} />
            <Route exact path="/checkout" render={() => <Checkout />} />
            <Redirect to="/" />
          </Switch>
        </Drawer>
      </Cart>
    </div>
  );
}

export default App;
