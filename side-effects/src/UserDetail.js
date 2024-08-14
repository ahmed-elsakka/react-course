import { useState, useEffect } from "react";

function UserDetail() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal})
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data);
          setError(null);
        })
        .catch((error) => {
          setUser(null);
          setUser(error.message);
        });
    }
    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
      {user && 
        <div>
            <p><strong>Name: </strong> {user.name}</p>
            <p><strong>Email: </strong> {user.email}</p>
        </div>
        }
    </div>
  );
}

export default UserDetail;