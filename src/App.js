import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import "./App.css"

function App(props) {
  return (
    <Router>
      <div id="container">
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contact/:id" component={Contact} />
        </main>
      </div>
    </Router>
  )
}

export default App
