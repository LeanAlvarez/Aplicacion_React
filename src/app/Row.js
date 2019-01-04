import React, { Component } from 'react'


class Row extends Component {
    render(){
        return (
            <tr className="text-center">
                <td>{this.props.change.when}</td>
                <td>{this.props.change.who}</td>
                <td>{this.props.change.description}</td>
            </tr>
        )
    }
}

export default Row