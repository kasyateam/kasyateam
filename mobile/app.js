import React from 'react';
import ReactDOM from 'react-dom';


class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="Sky" text="They argued that there was no way to reach the sky. They said the universe is infinite. They talked a lot. But when the Earth dies not because of space, but because of people like you, you begin to understand: What am I worth?"></Main>,
  document.getElementById('react-app')
);
