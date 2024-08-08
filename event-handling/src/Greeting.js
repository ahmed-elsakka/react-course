function Greeting() {
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1> }
        </div>
    );
}

export default Greeting;