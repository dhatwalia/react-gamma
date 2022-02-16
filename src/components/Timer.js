import { useState, useEffect, useRef } from "react";

const Timer = () => {
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return <h2>Render Count: {count.current}</h2>;
};

export default Timer;
