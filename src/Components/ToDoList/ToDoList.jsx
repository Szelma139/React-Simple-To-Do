import React, { Component } from "react";
import ToDo from "./ToDo";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { Header, Segment } from 'semantic-ui-react'

const colors = ['red', 'orange', 'yellow', 'olive', 'blue'];


export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
          {content:"Tutaj jest jakis tekst"},
          {content:"Tutaj jest inny tekst"},  
    ],
      currentData: ""
      
    };
  }

handleChange = (e) => {
 
    this.setState({
        currentData: e.target.value
        
    });
    console.log("Target value to " + this.state.currentData);
}

submitData = (e) => 
{
    e.preventDefault();
    let newObject = {}
    newObject.content=this.state.currentData;
    let newArray = [...this.state.list, newObject]
    this.setState(prevState => ({
        list: newArray,
        currentData: ''

    }))
    console.log("Nowa lista to " + this.state.list);

}

  render() {
    return (
      <div className="ui mini">
  <Segment inverted>
<Header as='h5' inverted color='teal'>
Moja aplikacja to do
        <ul>
          <Form onSubmit={this.submitData}>
            <Form.Group widths="equal">
              <Form.Input
                size='small'
                label="ToDo"
                placeholder="Your todo text here.."
                defaultvalue=""
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Button color="red" className="ui-button">Add</Form.Button>
       
        </Form>
        </ul>
{this.state.list.map((item) => {
    return (
<div> <ToDo text={item.content} random={colors[Math.floor(Math.random() * colors.length)]}/> </div>
    )

}

)}
    </Header>
    </Segment>

     



        {/*    this.state.list.map((element) => {
               //     <li>   <ToDo text={this.state.currentdata}/> </li>
             //   }))
             
          */}
      </div>
    );
  }
}
