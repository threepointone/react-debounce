import React from 'react';
import {Debounce} from '../../src/index';

export class App extends React.Component{
  state = {}
  render(){
    return <div>
      <input value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
      <Debounce period={200} value={this.state.input}>{
        value => <div>
          debounced: {value} <br/>
          actual: {this.state.input}
        </div>
      }</Debounce>

    </div>;
  }
}
