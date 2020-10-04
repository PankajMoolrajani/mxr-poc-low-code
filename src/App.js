import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ToDoApp from "./configs/ToDoApp";
import ToDoBoard from "./configs/ToDoBoard.json";

class App extends Component {
  _renderList(uiConfig) {
    console.log("_renderList");
    console.log(uiConfig);
    let items = [];
    // uiConfig.data.map((item) => {
    //   items.push(<Box>{item}</Box>);
    // });
    uiConfig.itemUiConfig.children.map((item) => {
      items.push(this._renderChild(item));
    });
    return (
      <Box>
        <Box>List</Box>
        <Box>{items}</Box>
      </Box>
    );
  }
  _renderElement(uiConfig) {
    let renderedElement = null;
    switch (uiConfig.type) {
      case "text":
        renderedElement = uiConfig.label;
        break;
      case "textfield":
        renderedElement = (
          <TextField label={uiConfig.label} placeholder={uiConfig.label} />
        );
        break;
      case "password":
        renderedElement = (
          <TextField label={uiConfig.label} placeholder={uiConfig.label} />
        );
        break;
      case "button":
        renderedElement = <Button> {uiConfig.label} </Button>;
        break;
      case "list":
        renderedElement = this._renderList(uiConfig);
        break;
      default:
        return null;
    }
    return (
      <Box key={Math.random()} style={uiConfig.style}>
        {renderedElement}
      </Box>
    );
  }

  _renderChild(uiConfig) {
    let children = [];
    if (uiConfig.type === "container") {
      children.push(this._renderContainer(uiConfig));
    } else {
      children.push(this._renderElement(uiConfig));
    }
    return (
      <Box key={Math.random()} style={{ flex: 1 }}>
        {children}
      </Box>
    );
  }

  _renderContainer(uiConfig) {
    let children = [];
    if (uiConfig.children) {
      uiConfig.children.map((item) => {
        children.push(this._renderChild(item));
        return null;
      });
    }
    return (
      <Box key={Math.random()} style={uiConfig.style}>
        {children}
      </Box>
    );
  }

  render() {
    return (
      <Box style={{ width: "100%", textAlign: "center" }}>
        {this._renderContainer(ToDoApp)}
      </Box>
    );
  }
}

export default observer(App);