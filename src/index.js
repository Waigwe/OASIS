import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {

    render(){
        return (
            <div>
                Welcome to Oasis Of Love
            </div>
        )
    }
}

ReactDOM.hydrate(<App/>, document.getElementById('root'))