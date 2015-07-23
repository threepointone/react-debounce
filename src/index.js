import React from 'react';
import debounce from 'debounce';

export class Debounce extends React.Component{
  static defaultProps = {
    period: 100
  }
  state = {
    value: this.props.value
  }
  componentWillMount() {
    this.fn = debounce(() => this.setState({value: this.props.value}), this.props.period);
    this.fn();
  }
  componentWillUpdate(nextProps) {
    if(nextProps.value !== this.props.value){
      this.fn();
    }
  }
  render(){
    return this.props.children(this.state.value);
  }
}
