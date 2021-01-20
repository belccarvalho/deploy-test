import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Add from "./Add";
import Posts from "./Posts";
import "./App.css";
import appContext from "./context";
import axios from "axios";
function App() {
  const [newPost, setNewPost] = useState({});
  const [postList, setPostList] = useState([]);

  const getPosts = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: "users/get",
    })
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  return (
    <div>
      <appContext.Provider
        value={{
          newPost,
          setNewPost,
          postList,
        }}
      >
        <Router>
          <nav className='navbar navbar-expand-lg navbar-light bg-danger'>
            <a className='navbar-brand' href='/'>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item '>
                  <Link className='nav-link' to='/add'>
                    Add Post
                  </Link>
                </li>
                <li className='nav-item' onClick={getPosts}>
                  <Link className='nav-link' to='/get'>
                    Get Post
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdown
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='/'>
                      Action
                    </a>
                    <a className='dropdown-item' href='/'>
                      Another action
                    </a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='/'>
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path='/add'>
              <Add />{" "}
            </Route>
            <Route path='/get'>
              <Posts />
            </Route>
          </Switch>
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;
