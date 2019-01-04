import React,{ Component } from 'react';

import Heading from './Heading'
import Row from './Row';

// import timeago from 'timeago.js'
// timeago()

import { format } from 'timeago.js';

class Headings extends Component {
    render(){
        return(
            <thead>
                        <tr>
                            {
                                this.props.headings.map((heading, i) => {
                                    return <Heading  key={i} heading={heading}/>
                                })
                            }
                        </tr>
            </thead>
        )
    }
}

class Rows extends Component {
    render(){
        return(
            <tbody>
                        {
                            this.props.data.map((row,i) => {
                                return <Row key={i} change={row}/>
                            })
                        }
            </tbody>
        )
    }
}


class App extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }


         componentDidMount(){
            setInterval( async () => {
            const res = await fetch('https://openlibrary.org/recentchanges.json?limit=10')
            const data = await res.json()
            const formatData = this.formatData(data)
            this.setState({
            data: formatData
        })
        }, 1000)


    }

    formatData(data){
        return data.map((data, i) => {
            return{
                "when": format(data.timestamp)﻿,
                "who": data.author.key,
                "description": data.comment
            }
        })
    }

    render(){
        console.log(this.props.headings)
        return (
            <div className="container p-4 justify-content-center">
                <h1 className="text-center mb-5 mt-5">{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings}/>
                    <Rows data={this.state.data }/> 
                </table>
            </div>
        )
    }
}

export default App