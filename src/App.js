import { auth, db } from "./fire_config";
import { useState, useEffect } from "react";
import NotPrivate from "./components/NotPrivate";
import Private from "../src/components/Private";
import PrivateRoute from "../src/components/PrivateRoute";
import Login from "../src/components/Login";
import "./scss/_main.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    db.collection("homePagePaginateSectionData")
      .doc("34IZETrgUDTbRISVEnkt")
      .get()
      .then((res) => setstate(res.data().paginateData[0].items))
      .catch((err) => console.log(err));

    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log("Is logged in", user)
        setisLoggedIn(true);
      } else {
        // console.log("Is not logged in", user)
        setisLoggedIn(false);
      }
    });
  }, []);

  const logInHandler = (email, password) =>{
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
        console.log(user,email,password,"logged")
        setisLoggedIn(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })};
  // const logInHandler = (a, b) => {
  //   console.log(a, b, "works");
  // };

  const logOutHandler = () => {
    auth
      .signOut()
      .then(function () {
        setisLoggedIn(false);
        // Sign-out successful.
      })
      .catch(function (error) {
        console.log(error, "err");
      });
  };

  const userStatusDisplay = () => {
    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in</p>
          <button onClick={logOutHandler}>Logout</button>
        </div>
      );
    } else {
      return <p>You are not logged in</p>;
    }
  };

  const [state, setstate] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  console.log(isLoggedIn);

  // db.collection("homePagePaginateSectionData")
  //   .doc("34IZETrgUDTbRISVEnkt")
  //   .get()
  //   .then((res) => setstate(res.data().paginateData[0].items))
  //   .catch((err) => console.log(err));

  return (
    <div className="App">
      {userStatusDisplay()}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="notPrivate">NotPrivate</Link>
            </li>
            <li>
              <Link to="Private">Private</Link>
            </li>
          </ul>
        </div>
        <Route path="/login">
          <Login logInHandler={logInHandler} isLoggedIn={isLoggedIn} />
        </Route>
        <PrivateRoute props={isLoggedIn} path="/private">
          <Private />
          Private and some database content : {state}
        </PrivateRoute>
        <Route path="/notprivate">
          <NotPrivate />
        </Route>
      </Router>
    </div>
  );
}

export default App;
