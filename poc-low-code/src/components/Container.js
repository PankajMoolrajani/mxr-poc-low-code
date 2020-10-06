import React, { Component } from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import Child from "./Child"

class Container extends Component {
  _renderContainer(uiConfig, data) {
    let children = [];
    if (uiConfig.children) {
      uiConfig.children.map((item) => {
        children.push(<Child uiConfig={item} data={data} />);
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
    return (this._renderContainer(this.props.uiConfig, this.props.data));
  }
}

export default observer(Container);
