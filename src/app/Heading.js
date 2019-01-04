import React, { Component } from 'react';

class Heading extends Component {
    render(){
        return <th className="text-center">{this.props.heading}</th>
    }
}

export default Heading