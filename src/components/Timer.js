import { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // <- add empty brackets here for first render only

    return <div>I've rendered {count} times!</div>;
};

export default Timer;
