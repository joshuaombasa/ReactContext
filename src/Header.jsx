import React from "react";
import {Consumer} from "./themeConext";


export default class Header extends React.Component {
  render() {
    return (
      <div className="top--section">
        <Consumer>
          {
            (context => {
              return  <h1 className="title">Welcome to context {context}</h1>
            })
          }
        </Consumer>
      </div>
    )
  }
}