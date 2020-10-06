import React, { Component } from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import Element from "./Element"
import Container from "./Container"


class Child extends Component {
  _renderChild(uiConfig, data) {
    let children = [];
    if (uiConfig.type === "container") {
      children.push(<Container uiConfig={uiConfig} data={data} />);
    } else {
      children.push(<Element uiConfig={uiConfig} data={data} />);
    }
    return (
      <Box key={Math.random()} style={{ flex: 1 }}>
        {children}
      </Box>
    );
  }


  render() {
    return (this._renderChild(this.props.uiConfig, this.props.data))
  }
}

export default observer(Child);
