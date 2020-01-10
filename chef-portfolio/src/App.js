import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import ChefPortfolio from "./components/ChefPortfolio";
import AllRecipes from "./components/AllRecipes";

function App() {
  const [chefId, setChefId] = useState(null);

  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={(props) => <Login setChefId={setChefId} {...props}/>} />
        <Route path="/register" render={(props) => <Register setChefId={setChefId} {...props}/>} />
        <Route path="/all-recipes" component={AllRecipes} /> {/* all recipes for non-logged in users */}
        <PrivateRoute path="/chef-portfolio" component={(props) => <ChefPortfolio chefId={chefId} {...props}/>}  />
      </div>
    </Router>
  );
}

export default App;
