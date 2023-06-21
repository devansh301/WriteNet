import { useContext } from "react";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
} from "react-router-dom";
import { Context } from "./context/Context";

function App() {
const {user} = useContext(Context);
  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/" ><Home /></Route>
      <Route path="/register"  >{user ? <Home/> : <Register/>}</Route>
      <Route path="/login" >{user ? <Home/> : <Login/>}</Route>
      <Route path="/write" >{user ? <Write/> : <Register/>}</Route>
      <Route path="/settings" >{user ? <Setting/> : <Register/>}</Route>
      <Route path="/post/:postId" ><Single/></Route>
      <Route path="/about" ><About /></Route>
    </Switch>
    </Router>
  );
}

export default App;
