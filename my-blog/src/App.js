import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
/*import Header from './components/Header';
import Content from './components/Content';*/
import Example2 from './components/Example2';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value : 0
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(){
    let number = this.state.value;
    let plusNumber = number + 1;

    this.setState({
      value : plusNumber
    });
  }


componentDidMount() {
  this._getHost();
}

_getHost = async() => {
  const res = await axios.get('/api/host');
  this.setState({ host : res.data.host })
}

render() {
  return(/*
    <div className='App'>
      <Header title={this.props.headerTitle}/>
      <Content title={this.props.ContentTitle}
               body={this.props.contentBody}/>
    </div>*/
    <div>
      <Example2 number = {this.state.value}
                onUpdate={this.updateValue}/>
    </div>
  )
}
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

export default App;
