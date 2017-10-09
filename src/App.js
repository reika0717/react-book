
import React from 'react';

const HOC = {InnerComponent} => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return(
      <InnerComponent
        {...this.props}
        {...this.state}
        update = {this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <button>button</button>
        <hr />
        <label>label</label>
      </div>
    )
  }
}

const Button = (props) =>
<button onClick={props.update}>{props.children} - {props.count}</button>

class Label extends React.Component{
  componentWillMount(){
    console.log('label will mount')
  }
  render(){
    return(
      <label onMouseMove={this.props.ipdate}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App
