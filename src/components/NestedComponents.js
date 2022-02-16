import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const Component1 = () => {
    const [user, setUser] = useState("Prajwal");

    return (
        <UserContext.Provider value={user}>
            <h2>{`Hello ${user}!`}</h2>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <div>Component 2</div>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <div>Component 3</div>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <div>Component 4</div>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);
    return (
        <>
            <div>Component 5</div>
            <div>{`Hello ${user} again!`}</div>
        </>
    );
}

export default Component1;
