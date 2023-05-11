import React from "react";
import {NameContextConsumer} from "./themeContext";


export default class Header extends React.Component {
  render() {
    return (
      <div className="top--section">
        <NameContextConsumer>
          {
            (context => {
              return  <h1 className="title">Welcome to context {context.username}</h1>
            })
          }
        </NameContextConsumer>
      </div>
    )
  }
}