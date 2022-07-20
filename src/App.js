import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/styles.css"
import LoginSignup from "./views/LoginSignup/LoginSignup.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Admin from "./views/AdminPanel/Admin.js";
import { getLocalStorage, isItNull } from "./containers/functions.js";
import Editpage from "./views/EditPage/Editpage.js";
import Addcontent from "./views/AddContent/Addcontent.js";
function App() {


  let tochen = getLocalStorage("tochen");

  // console.log(tochen, "QQQ");
  // localStorage.clear();
  return (
    <>
      <Router>
        <Switch>
          {/* {
            isItNull(tochen) ?
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              :
              <>
                <Route exact path="/">
                  <Redirect to="/admin" />
                </Route>
                <Route exact path="/login">
                  <Redirect to="/admin" />
                </Route>
              </>
          }

          {
            isItNull(tochen) ?
              <Route path="/login" exact component={LoginSignup} />
              :
              <Route path="/admin" exact component={Admin} />
          } */}
          <Route path="/login" exact component={LoginSignup} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/editAgency/:agencyId" exact component={Editpage} />

          <Route path="/addcontent" exact component={Addcontent} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
