import { useContext } from "react";
import { UserContext } from "./UserContext";

function ChildComponent() {
    const user = useContext(UserContext);

    return (
        <div>
            <h3>Child Component</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}

export default ChildComponent;