import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { observer } from 'mobx-react'
import Box from '@material-ui/core/Box'
import tasks from './data/tasks.json'
import Container from './components/Container'
import store from './stores/Store'
import axios from 'axios'


class App extends Component {
  async componentDidMount() {
    if(!store.init) {
      const location  = window.location
      const appName = location.pathname.replaceAll('/',' ').trim().split(' ')[0]
      const config = await axios.get(`https://kushal.parikh.sb.intern.monoxor.com:8080/test/${appName}`)
      console.log(config)
      store.initialize(config.data)
    } 
  }

  
  render() {
    let data = tasks.tasks
    if(!store.init) {
      return <div>Loading</div>
    }


    return (
      <Box style={{ width: '100%', textAlign: 'center' }}>
        <Router>
          <Switch>
            <Route path='/crm'>
              <Container uiConfig={JSON.parse(store.appConfig)} data={data} />
            </Route>
            <Route path='/todo'>
              <Container uiConfig={JSON.parse(store.appConfig)} data={data}/>
            </Route>
          </Switch>
        </Router>
      </Box>
    )
  }
}

export default observer(App)
