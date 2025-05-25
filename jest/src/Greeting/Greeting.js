function Greeting(props) {
    return (
        <>
            <h1>Hello {props.name}</h1>
            <button onClick={props.onClick}>Start</button>
        </>
    );
}

export default Greeting;