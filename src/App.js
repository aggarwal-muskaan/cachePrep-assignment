// import logo from './logo.svg';
// import './App.css';
import AllCourses from "./components/AllCourses";
import Cart from "./components/Cart";
import Header from "./components/Header";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <AllCourses />} />
        <Route exact path="/checkout" render={() => <Cart />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
