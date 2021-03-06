import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import ToDoApp from "./apps/ToDoApp.json";
import CrmApp from "./apps/CrmApp.json"
import tasks from "./data/tasks.json";
import Container from "./components/Container"


class App extends Component {
  render() {
    let data = tasks.tasks;
    return (
      <Box style={{ width: "100%", textAlign: "center" }}>
        <Router>
          <Switch>
            <Route path="/crm" component={() => <Container uiConfig={CrmApp} data={data} />} />
            <Route path="/todo" component={() => <Container uiConfig={ToDoApp} data={data} />} />
          </Switch>
        </Router>        
      </Box>
    );
  }
}

export default observer(App);
