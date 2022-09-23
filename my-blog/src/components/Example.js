import React from "react";

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header : "Example header state",
            content : "Example content state"
        };
    }

    updateHeader(text) {
        this.setState({
            header : "Example Header has changed"
        });
    }
    render() {
        return (
           <div>
              <h1>{this.state.header}</h1>
              <h2>{this.state.content}</h2>
              <button onClick={this.updateHeader.bind(this)}>Update</button>
           </div>
        );
     }
}

export default Example;