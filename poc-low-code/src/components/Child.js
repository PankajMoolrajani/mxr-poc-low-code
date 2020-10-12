import React, { Component } from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import Element from "./Element"
import Container from "./Container"


class Child extends Component {
  _renderChild(uiConfig, data, store) {
    let children = [];
    if (uiConfig.type === "container") {
      children.push(<Container uiConfig={uiConfig} data={data} store={store} />);
    } else {
      children.push(<Element uiConfig={uiConfig} data={data} store={store} />);
    }
    return (
      <Box key={Math.random()} style={{ flex: 1 }}>
        {children}
      </Box>
    );
  }


  render() {
    return (this._renderChild(this.props.uiConfig, this.props.data, this.props.store))
  }
}

export default observer(Child);
