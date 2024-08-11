import React, { createContext } from "react";
import ParentComponent from "./ParentComponent";
import { UserContext } from "./UserContext";


function App() {
  const user = { name: "John Doe", age: 30 };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>App Component</h1>
        <ParentComponent user={user} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
