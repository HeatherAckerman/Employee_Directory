import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
          <div style={{textAlign: "center"}}>
           <div className="jumbotron" style={{background: "navy"}}>
            <h1 style={{color: "white"}}>
              Employee Directory
            </h1>
          </div>
          </div>
        )
      }
}

export default Header;