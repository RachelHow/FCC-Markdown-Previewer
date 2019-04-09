import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

let marked = require("marked");

class App extends Component {

  state = {
    markdown: "# Hello there!\n## Welcome to my React Markdown Previewer! \n### Built with React :)\n\n-----------\n\n*italic*, **bold**,\n`monospace`, ~~strikethrough~~ and [links](https://www.freecodecamp.com).\n\n---\n\n> Block Quotes!\n\nUnordered list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3.pears\n\nHere's some `code`,\n\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n\n **Stromtoopocat** says Hi!\n\n ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)"
  }

  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render() {

    let {markdown} = this.state;

    return (
      <div className="App container">
        <header className="my-header">
          <h1>Markdown Previewer</h1>
        </header>

        <div className="main">
          <div className="left-col">
            <FormGroup controlId="editor">
              <FormControl as="textarea" placeholder= "" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
            </FormGroup>
          </div>

          <div className="right-col">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;