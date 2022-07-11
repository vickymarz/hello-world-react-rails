import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting greeting="hello" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
