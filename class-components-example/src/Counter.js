import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={(() => {this.setState({count: this.state.count + 1})})}>
                    Increment
                </button>
            </div>
        );
    }
}

export default Counter;