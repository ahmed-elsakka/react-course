import React from "react";

class DataFetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        this.abortController = new AbortController();
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {signal: this.abortController.signal})
        .then(response => response.json())
        .then(data => this.setState({data}));
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        return (
            <div>
                <h1>Fetched Data from API</h1>
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
            </div>
        );
    }
}

export default DataFetcher;
