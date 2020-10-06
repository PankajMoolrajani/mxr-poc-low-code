import React, { Component } from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Child from "./Child"


class Element extends Component {
  _renderList(uiConfig, data) {
    let listItems = [];
    data.map((dataItem) => {
      uiConfig.itemUiConfig.children.map((uiItem) => {
        listItems.push(<Child uiConfig={uiItem} data={dataItem} />);
        return null
      });
      return null
    });
    return (
      <Box>{listItems}</Box>
    );
  }


  _renderElement(uiConfig, data) {
    let label = data[uiConfig.label]
    let renderedElement = null;
    switch (uiConfig.type) {
      case "text":
        renderedElement = uiConfig.label;
        break;
      case "text1":
          renderedElement = label;
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
        renderedElement = this._renderList(uiConfig, data);
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


  render() {
    return (this._renderElement(this.props.uiConfig, this.props.data));
  }
}

export default observer(Element);
