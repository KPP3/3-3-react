import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handlerPlus = () => {
        setCount(count + 1);
    };

    const handlerMinus = () => {
        setCount(count - 1);

        if (count < 1){
            alert("Count can not be less than 0")
            return setCount(0);
          } else{
              return count;
          };
    };

    const clear = () => {
        setCount(0)
    };

    const validation = ( count) => {
        if (count < 0) {
            alert("Count Can not be less than 0");
            return 0;
        }
        else {
            return count;
        }

    }

    return (
        <>
            <button onClick={handlerMinus}>-</button>
            <span>{count}</span>
            <button onClick={handlerPlus}>+</button>
            <br />
            <button onClick={clear}>Clear</button>
        </>
    );
}

export default Counter;