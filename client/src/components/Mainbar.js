import React, { Component } from "react";
import Navbar, {Brand} from "react-bootstrap/Navbar";

export default class Mainbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src="/whatsapp.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" React Bootstrap"}
          </Navbar.Brand>
        </Navbar>
        <br />
      </div>
    );
  }
}
