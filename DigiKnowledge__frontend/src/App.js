import React,{useContext,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Link,Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/Navbar'
function App(props) {


  return (
<div className="app">
<Router>
<Switch>
<Route exact path="/login">
  <Login/>
</Route>

<Route exact path="/">
<SignUp/>
</Route>
 
 <Route exact path="/home">
   <Navbar/>
<Home/>
 </Route>
</Switch>
</Router>
</div>

  )
}


export default App;
