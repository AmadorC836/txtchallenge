import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const countHandler = () => {
        setCount (count + 1)
    };
    const countHandlr = () => {
        setCount (count - 1)
    };
    const countHandle = () => {
        setCount (0)
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler}>Add</button>
            <button onClick={countHandlr}>subtract</button>
            <button onClick={countHandle}>reset</button>
        </div>
    )

};

export default Counter;