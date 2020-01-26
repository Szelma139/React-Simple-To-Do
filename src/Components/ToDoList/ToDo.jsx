import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


export default class ToDo extends Component {

  render () {
    return (
      <div style={{margin:"20px 20px 20px 20px"}}>

          <li>
            {this.props.text} <Button color={this.props.random}>Delete</Button>
            {console.log(this.props.random)}
          </li>
      </div>
    )
  }
}
