import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2> { this.props.title } </h2>
                <div> { this.props.body } </div>
            </div>
        )
    }
}

Content.propTypes = {
    title : React.PropTypes.string,
    body : React.PropTypes.string.isRequired
};

export default Content;