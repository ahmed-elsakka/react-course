function Greeting(props) {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome {props.username}!</h1> : <h1>Please sign in</h1> }
        </div>
    );
}

export default Greeting;