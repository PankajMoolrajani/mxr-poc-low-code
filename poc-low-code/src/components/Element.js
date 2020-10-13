import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Child from './Child'
import store from '../stores/Store'
import axios from 'axios'

class Element extends Component {
  _renderList = (uiConfig, data) => {
    let listItems = []
    data.map((dataItem) => {
      uiConfig.itemUiConfig.children.map((uiItem) => {
        listItems.push(
          <Child
            key={uuidv4()}
            uiConfig={uiItem}
            data={dataItem}
          />
        )
        return null
      })
      return null
    })
    return <Box>{listItems}</Box>
  }

  _renderElement = (uiConfig, data) => {
    let label = data[uiConfig.label]
    let renderedElement = null
    switch (uiConfig.type) {
      case 'text':
        renderedElement = uiConfig.label
        break
      case 'text1':
        renderedElement = label
        break
      case 'textfield':
        let stateObject = {} 
        if (uiConfig.isStateFull) {
          stateObject.value = store[uiConfig.name]
            ? store[uiConfig.name]
            : ''
          stateObject.onChange = (e) => {
            store[uiConfig.name]=e.target.value
          }
        }
        renderedElement = (
          <TextField
            label={uiConfig.label}
            id={`${uiConfig.name}-id`}
            value=''
            placeholder={uiConfig.label}
            {...stateObject}
          />
        )
        break
      case 'password':
        renderedElement = (
          <TextField label={uiConfig.label} placeholder={uiConfig.label} />
        )
        break
      case 'button':
        console.log(uiConfig)
        renderedElement = (
          <Button onClick={async () => {
            if(uiConfig.action.type === 'submit') {
              let bindStates = {}
              uiConfig.action.dataStateMap.forEach(dataState => {
                for (const key in dataState) {
                  bindStates[key] = store[dataState[key]]
                }
              })
             
              const data = {
                [uiConfig.action.dataKey]: bindStates
              }

              const query = `
                mutation($${uiConfig.action.dataKey}: ${uiConfig.action.dataKey}InputType) {
                  ${uiConfig.action.queryOrMutationName}(${uiConfig.action.dataKey}: $${uiConfig.action.dataKey}) {
                    id
                  }
                }
              `
              await axios.post(
                uiConfig.action.url,
                {
                  query: query,
                  variables: data
                }, {
                  headers: {
                    'app_id' : 'node-red',
                    'app_secret': 'automatestuff',
                    'org_id': '5eecbacb59da85299c18c799'
                  }
                }
              ) 
            }
          }}> 
            {uiConfig.label} 
          </Button>
        )
        break
      case 'list':
        renderedElement = this._renderList(uiConfig, data)
        break
      default:
        return null
    }
    return (
      <Box style={uiConfig.style}>
        {renderedElement}
      </Box>
    )
  }

  render() {
    return this._renderElement(this.props.uiConfig, this.props.data)
  }
}

export default observer(Element)
