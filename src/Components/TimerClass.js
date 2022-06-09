import React, { Component } from 'react'

export class TimerClass extends Component {

    // 1. used to set initial value to the components
    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    //3. used to request data from server
    componentDidMount = () => {
        this.timeI = setInterval(this.tick, 1000)
    }

    //4. called whenever perticular state / props update
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.time) {
            console.log("Component Update");
        }
    }

    //5.called whenever we move to another component (used to release the resourses)
    componentWillUnmount = () => {
        clearInterval(this.timeI)
    }

    // 2. called whenever state value changed
    render() {
        return (
            <>
                <div className='text-center py-5 mb-5'>
                    <h2>Timer with Class based component</h2>
                    <div style={{ fontSize: '72px' }}>{this.state.time}</div>
                </div>
            </>
        )
    }
}

export default TimerClass