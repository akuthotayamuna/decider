import React, {Component} from 'react'

class Helloworld extends React.Component {
    render(){
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

    export default Helloworld;