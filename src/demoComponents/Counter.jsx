import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick = {() => setCount(count + 1)}>Increase</button>
            <button onClick = {() => setCount(count - 1)}>Decrease</button>

            <p>Courent Count: { count } </p>
        </div>
    );
}

export {Counter};