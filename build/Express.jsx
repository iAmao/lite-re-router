import React from 'react';
import Back from '../src/Back';

const style = {
  link: {
    color: 'green',
    padding: 5,
    textDecoration: 'underline'
  },
  container: {
    textAlign: 'center'
  }
};
export default class Express extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div>
        <h2>this is a class component</h2>
        <Back style={style.link}>Back</Back>
        <button onClick={() => this.props.location.back()}>Back</button>
      </div>
    )
  }
}
