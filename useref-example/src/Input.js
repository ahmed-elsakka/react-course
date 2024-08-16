import { useEffect, useRef } from "react";

function Input() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    return (
      <input ref={inputRef}  type="text"  />
    );
  }
  
export default Input;
