import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'
import Box from '@material-ui/core/Box'
import Child from './Child'

class Container extends Component {
  
  _renderContainer = (uiConfig, data) => { 
    return (
      <Box key={uuidv4()} style={uiConfig.style}>
        {
          uiConfig.children && uiConfig.children.map(item => (
            <Child
              key={uuidv4()}
              uiConfig={item}
              data={data}
            />
          ))
        }
      </Box>
    )
  }

  render() {
    return this._renderContainer(this.props.uiConfig, this.props.data)
  }
}

export default observer(Container)
