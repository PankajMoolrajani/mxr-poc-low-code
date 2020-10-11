import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'
import Box from '@material-ui/core/Box'
import Element from './Element'
import Container from './Container'

class Child extends Component {
  render() {
    return (
      <Box key={uuidv4()} style={{ flex: 1 }}>
        {
          this.props.uiConfig.type === 'container'
          ? (
              <Container
                key={uuidv4()}
                uiConfig={this.props.uiConfig}
                data={this.props.data} 
              />
          )
          : (
            <Element
              key={uuidv4()}
              uiConfig={this.props.uiConfig}
              data={this.props.data} 
            />
          )
        } 
      </Box>
    )
  }
}


export default observer(Child)
