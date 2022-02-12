function MissedGoal() {
    return <h3>MISSED!</h3>;
}

function MadeGoal() {
    return <h3>Goal!</h3>;
}

const Goal = (props) => {
    const isGoal = props.isGoal;
    if (isGoal)
        return <MadeGoal />;
    else
        return <MissedGoal />;
};

export default Goal;
