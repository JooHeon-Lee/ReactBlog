import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host: '',
    }
  }


componentDidMount() {
  this._getHost();
}

_getHost = async() => {
  const res = await axios.get('/api/host');
  this.setState({ host : res.data.host })
}

render() {
  return(
    <div className='App'>
      <Header title={this.props.headerTitle}/>
      <Content title={this.props.ContentTitle}
               body={this.props.contentBody}/>
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
