import React, { Component } from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import ToDoApp from "./apps/ToDoApp";
import tasks from "./data/tasks.json";
import Container from "./components/Container"


class App extends Component {
  render() {
    let data = tasks.tasks;
    return (
      <Box style={{ width: "100%", textAlign: "center" }}>
        <Container uiConfig={ToDoApp} data={data} />
      </Box>
    );
  }
}

export default observer(App);
