import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Projects</h1>
          <h1 className="App-title">Books</h1>          
          <h6><a href="http://jackpetraitis.com/login">Login</a></h6>
          <i><h2 className="App-title center"><a href="http://jackpetraitis.com">jackpetraitis.com</a></h2></i>
        </header>
        <div className="big-box-projects">
          <p>
            Here be a section devoted to projects
          </p>
          <div className="project-array">
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
            <div className="box-project">
              <p>
                Project Array
              </p>
            </div>
          </div>
        </div>
        <div className="box-resume">
          <div className="resume">
            <p>
              Resume section, possible auth-protected by Recruiter Login  
            </p>
          </div>
        </div>
        <div className="box-books">
          <div className="book-description">
            <p>
              Here be a section devoted to books
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
          <div className="book">
            <p>
              Book Array
            </p>
          </div>
        </div>
        <div>
          <p>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
