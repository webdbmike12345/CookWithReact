import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

const Countfunc = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const style = useContext(ThemeContext);

     const changeCount = (amount) => {
        setCount(prevState => prevState + amount)
    }

    return (
        <>
            <button style={style} onClick={() => changeCount(-1)}>-</button>
            <span>Function {count}</span>
            <button style={style} onClick={() => changeCount(1)}>+</button>
        </>
    )
}

export default Countfunc;

